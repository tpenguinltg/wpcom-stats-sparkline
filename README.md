# wpcom-stats-sparkline.user.js

[WordPress.com](https://wordpress.com/) has removed the view stats sparkline that was previously in the admin bar. Restoring it is [under consideration](https://en.forums.wordpress.com/topic/new-admin-bar-feedback?replies=12#post-2824387), but until it is restored, this user script restores it.

## Installation
If you don't already have one, install [a browser extension](https://greasyfork.org/en/help/installing-user-scripts) that allows you to run user scripts. Then, install the script from [Greasy Fork](https://greasyfork.org/en/scripts/26076-wordpress-com-stats-sparkline).

Alternatively, visit the URL below:

[https://github.com/tpenguinltg/wpcom-stats-sparkline/raw/master/wpcom-stats-sparkline.user.js](https://github.com/tpenguinltg/wpcom-stats-sparkline/raw/master/wpcom-stats-sparkline.user.js)

### Custom Domains

If you own a custom domain, you will have to add the domain to the script's includes. Go to the script's options in your extension and add the following as an include, where `example.com` is your custom domain:

```
https://example.com/*
```

If your extension does not have support for user includes, edit the script and add this after the `@include` line, again where `example.com` is your custom domain:

```javascript
// @include https://example.com/*
```

## Changelog
* **v1.1.0:** Add support for custom domains
* **v1.0.0:** Initial release
