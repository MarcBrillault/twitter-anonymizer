# twitter-anonymizer
One-click anonymizer of tweets before sharing a screenshot.

# User manual

- Right click anywhere on the page
- Select `Toggle anonymization`
- All user names and avatars should be anonymized, you can safely take a screenshot of the tweets
- Repeat the steps 1&2 to display the user names & avatars again

# Why should I use the extension ?

Some discussions on Twitter can be quite heated. It's common to quote a tweet to criticize its content. But sometimes, a quoted tweet can lead to harassment of the quoted user, and the potential harassment is even higher when you have a huge number of followers.

The best way to prevent this potential harassment is to share a screenshot of the tweet, without the name and avatar of the user. It does not fully prevent harassment, as one can still search for the tweet's content and find it, but it will still work as a way to limit the harassment :

- As there is a new step (searching for the tweet's content), fewer people will make this effort
- If the user regrets their tweet, or just wants to protect themselves, they can delete the tweet and make it impossible to associate the anonymized tweet to their account

(The REAL best way to prevent harassment is to rephrase the tweet's content so it can never be found by someone with malicious intents. But hey, the anonymization is the _second_ best way !)

And remember, be responsible with what you share, and never forget to describe your image contents for the visually impaired.

# Two versions

As Firefox still uses `manifest v2`, there will be two directories in the repository.

As soon as Firefox allow `manifest v3` extensions  ([It should be at the end of 2022](https://blog.mozilla.org/addons/2022/05/18/manifest-v3-in-firefox-recap-next-steps/)), I'll go back to managing just one version.

# Where can I install the plugin ?

- [Install plugin on Chrome](https://chrome.google.com/webstore/detail/twitter-anonymizer/dliaabmcomhfhpibgbljmcjfgfkjbalf)
- [Install plugin on Firefox](https://addons.mozilla.org/fr/firefox/addon/twitter-anonymizer/)
- Install on Opera: Coming soon

# Changelog

## v1.1.0

### New functionalities

- Mask the page's URL 

### Bugfixes

- Links & images in "Personnes pertinentes" are now hidden 

### Repository improvements

- Added 64 and 32px icons (Should affect the plugin pages on Firefox and Opera)
- Added links to download the plugin on the `README.md` file

## v1.0.2

### Bugfixes:

- Mask UserName and UserLink on user homepage
- Do not mask the menu icons

### Refactorization:

- Removed useless CSS selectors
- Added comments and moved elements in CSS code

## v1.0.1

### Bugfixes

- Quoted tweet usernames are not masked
- Names are not anonymized in the notifications
- "Personnes pertinentes" names are not masked
- Anonymize url chunks

### Refactorization
- Simplify selectors

## v1.0.0

### New functionalities

- one click to hide/display tweeter user's names and avatars
- the anonymization will be done on tweets that are loaded after the click