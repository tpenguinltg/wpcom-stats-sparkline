// ==UserScript==
// @name        WordPress.com Stats Sparkline
// @namespace   tpenguinltg
// @description Adds a stats sparkline to the WordPress.com admin bar
// @include     https://*.wordpress.com/*
// @version     1.0.0
// @updateURL   https://github.com/tpenguinltg/wpcom-stats-sparkline/raw/master/wpcom-stats-sparkline.user.js
// @homepageURL https://github.com/tpenguinltg/wpcom-stats-sparkline
// @grant       none
// @license     MPLv2.0; http://mozilla.org/MPL/2.0/
// @copyright   2016, tPenguinLTG (http://tpenguinltg.wordpress.com/)
// ==/UserScript==

window.onload = function() {
  var blogUrlAnchor = document.querySelector("#wp-admin-bar-blog-info a.ab-item");
  if (!blogUrlAnchor) return;

  var blogUrl = blogUrlAnchor.href;

  // only act on sites where the user is a member
  if (!document.URL.startsWith(blogUrl)) return;

  var sparklineImage = document.createElement("img");
  sparklineImage.src = blogUrl + "/wp-includes/charts/admin-bar-hours-scale.php";
  sparklineImage.alt = "Stats";
  sparklineImage.title = "Showing site views per hour for the last 48 hours. Click for full Site Stats.";
  sparklineImage.style.paddingTop = "4px";
  sparklineImage.style.paddingBottom = "4px";

  var statsLink = document.createElement("a");
  statsLink.appendChild(sparklineImage);
  statsLink.href = "https://wordpress.com/stats/" + window.location.hostname;
  statsLink.className = "ab-item";

  var menuItem = document.createElement("li");
  menuItem.appendChild(statsLink);

  document.getElementById("wp-admin-bar-root-default").appendChild(menuItem);
}
