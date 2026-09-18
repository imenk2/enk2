Jekyll::Hooks.register :pages, :post_init do |page|
  next unless page.path
  full_path = File.join(page.site.source, page.path)
  next unless File.exist?(full_path)

  mtime = File.mtime(full_path)
  page.data['last_modified_at'] ||= mtime
  page.data['date'] ||= mtime

  unless page.data['title']
    if page.content && (m = page.content.match(/^#\s+(.+)$/))
      page.data['title'] = m[1].strip
    else
      page.data['title'] = File.basename(page.path, '.*')
    end
  end
end
