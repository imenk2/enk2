# frozen_string_literal: true

# 指定 gem 的来源
source "https://rubygems.org"

# 明确指定 Jekyll 版本
gem "jekyll", "~> 4.3"

# 明确指定主题
gem "jekyll-theme-minimal", "~> 0.2.0"

# 锁定 2.2.0：使用 sassc(C 扩展) 编译器，比 3.x 的 sass-embedded 在 Windows 更稳定
# 直接 jekyll 命令会激活全局最新 3.1.0 导致版本冲突，故必须用 bundle exec
gem "jekyll-sass-converter", "2.2.0"

# Ruby 3.0+ 将 webrick 从标准库分离，Jekyll server 依赖它
gem "webrick"

# Ruby 3.4 将 bigdecimal/logger 从默认 gem 变为 bundled gem，需显式声明
gem 'bigdecimal'
gem 'logger'

# 网站插件
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"

end