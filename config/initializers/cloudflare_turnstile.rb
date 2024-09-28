RailsCloudflareTurnstile.configure do |c|
  c.site_key = ENV['CF_TURNSTILE_SITE_KEY']
  c.secret_key = ENV['CF_TURNSTILE_SECRET_KEY']
  c.fail_open = false
end
