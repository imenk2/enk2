# frozen_string_literal: true

require 'open3'
require 'time'

module GitDate
  @in_repo = nil

  def self.in_repo?
    return @in_repo unless @in_repo.nil?
    out, status = Open3.capture2('git', 'rev-parse', '--is-inside-work-tree')
    @in_repo = status.success? && out.strip == 'true'
  rescue Errno::ENOENT
    @in_repo = false
  end

  def self.last_commit_time(rel_path)
    return nil unless in_repo?
    out, status = Open3.capture2('git', 'log', '-1', '--format=%cI', '--', rel_path)
    return nil unless status.success? && !out.strip.empty?
    Time.parse(out.strip)
  rescue Errno::ENOENT, ArgumentError
    nil
  end
end

Jekyll::Hooks.register :pages, :post_init do |page|
  next unless page.path
  full_path = File.join(page.site.source, page.path)
  next unless File.exist?(full_path)

  time = GitDate.last_commit_time(page.path) || File.mtime(full_path)
  page.data['last_modified_at'] ||= time
  page.data['date'] ||= time

  unless page.data['title']
    if page.content && (m = page.content.match(/^#\s+(.+)$/))
      page.data['title'] = m[1].strip
    else
      page.data['title'] = File.basename(page.path, '.*')
    end
  end
end
