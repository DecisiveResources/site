---
layout: post
title: "You've Been MAID"
description: Your phone's Mobile Advertising ID (MAID) may be revealing more about your life than you realize. Discover how advertisers and data brokers use everyday apps to track your movements, why these practices remain largely legal, and how to protect your location privacy in just ten minutes.
author: Luke
category: [ privacy, cybersecurity ]
image: assets/post-images/you've been MAID.jpg
featured: false
---

-----

Your phone carries a serial number for advertisers, and you have probably never seen it. It is called a Mobile Advertising ID, or MAID. Apple calls it the IDFA (Identifier for Advertisers); Google calls it the Advertising ID (AAID or GAID). It is a string that looks like this: 6D92078A-8246-4BA4-AE5B-76104861E7DC.

The MAID was built as a privacy feature. It replaced the hardware serial numbers and phone numbers that apps once used to recognize you, and it can be reset. But because it is the same string in every app on your phone, it became the key that lets an ad network in a weather app, a game and a shopping app agree they are all looking at the same person. Add a location pin to each of those sightings and you have a map of where a specific device sleeps, works and worships.

This article covers three things: how the tracking works, why it is largely legal, and what you can do on your own phone in the next ten minutes

### How the tracking works

Nobody has to hack your phone. Your MAID leaves the device through two ordinary doors: the advertising code inside your apps, and the ad auction that runs every time an ad loads.

The auction path is the one most people never hear about: the app does not have to "sell" anything for its users' location to end up in a broker's database.

Door one: the SDK. Most free apps earn money by showing ads, and they do it by embedding a software development kit (SDK) from an ad network or analytics vendor. That SDK can read the MAID, and if the app has location permission it can read your GPS coordinates too. The app developer often never looks at what the SDK sends home.

Door two: the bidstream. When an ad slot opens, the app sends a bid request to an ad exchange describing the device: model, IP address, app name, MAID, and sometimes precise location. Dozens of bidders see that request in a real-time auction that finishes in milliseconds. Every bidder sees the data whether or not it wins. Companies have built entire businesses on bidding just to harvest that stream.

Door three: the broker. Location data companies buy or collect those sightings and stitch them together by MAID. One pin at 2 a.m. every night is a home address. One pin at 9 a.m. on weekdays is a workplace. A pin at a clinic, a church, a courthouse or a shelter is an inference about your life. The MAID is pseudonymous, but a home-plus-work pair is unique to a handful of people on earth, and brokers also sell "identity graphs" that link MAIDs to emails and names.

What a breach looks like. In January 2025, location broker Gravy Analytics was hacked. The leaked sample held tens of millions of location points from thousands of apps, including dating, fitness, transit, prayer and pregnancy apps and games like Candy Crush. Several of the named apps said they had no relationship with Gravy at all; the data had been pulled from the bidstream. You can be "MAID" by an app that never intended it.

Scale. One dataset obtained from a single US broker covered roughly 40,000 apps, 47 million MAIDs and 380 million location points across 137 countries.

### Why it is (mostly) legal

It is legal because, on paper, you agreed. The whole system rests on three layers of consent, and each one is thinner than it looks.

Layer one: you tapped "Allow." On iPhone, since iOS 14.5 in 2021, an app must show Apple's App Tracking Transparency (ATT) prompt before it can read your IDFA. AppsFlyer reported in April 2025 that about half of users worldwide now tap "Allow", often after a persuasive "pre-prompt" screen explaining the benefits. On Android, the Advertising ID is on by default; Google zeroes it out only after a user opts out in Settings, and most people never do. Numbers vary by source and app category, so verify any specific figure before quoting it.

Layer two: you gave the app your location. The location permission is for the app's feature (weather, maps, dating). Nothing in that prompt says the coordinates will ride along in ad requests. Legally, the app's privacy policy usually covers it, and almost nobody reads the policy.

Layer three: the data was "de-identified." Brokers argue a MAID is not personal information because it is not a name. That argument is weakening, but it is still the industry default.

Where the law is pushing back. There is no federal privacy law in the United States, so enforcement has come from the Federal Trade Commission using its authority over "unfair" practices, and from states.

-   In 2024 the FTC barred InMarket Media, Outlogic (formerly X-Mode), Gravy Analytics and Mobilewalla from selling Americans' sensitive location data.
-   In May 2026 the FTC settled its 2022 suit against Kochava and its successor Collective Data Solutions, barring them from selling sensitive location data without affirmative express consent; the court entered the order on June 26, 2026. Critics note the order narrowed the definition of "sensitive location" compared with earlier cases.
-   California's Delete Act created DROP, a state platform that opened to residents on January 1, 2026; since August 1, 2026, registered brokers must check it every 45 days and process deletion requests. Oregon, Texas and Vermont require broker registration but have no central deletion tool.
-   In the EU, the GDPR treats a MAID as personal data and requires a lawful basis for processing it. Enforcement against real-time bidding has been slow but is ongoing.

Notice what these actions have in common: they target sensitive locations and specific brokers. Ordinary MAID-plus-location tracking of where you shop and eat remains legal in most of the United States as of October 2026.

### How to secure your device

You cannot opt out of the ad auction, but you can send it a blank ID and a blurry location. That breaks the link that makes the data valuable. Menu names drift between OS versions and phone makers, so if a path below does not match your phone, search Settings for the keyword in bold.

iPhone (iOS 14.5 and later)

-   Settings → Privacy & Security → Tracking → turn off Allow Apps to Request to Track. Apps can no longer read your IDFA, and the prompt never appears.
-   Settings → Privacy & Security → Apple Advertising → turn off Personalized Ads. This covers Apple's own ad network, which ATT does not.
-   Settings → Privacy & Security → Location Services → go app by app. Set While Using or Never; turn off Precise Location for anything that does not need your exact spot (weather, shopping, news, games). Approximate location is a few square miles, which is useless for a home-address inference.
-   In the same Location Services list, scroll to System Services and review what is on.

Android (12 and later; paths vary by manufacturer)

-   Settings → Privacy (or Security & privacy) → Ads → tap Delete advertising ID. Apps then receive a string of zeros. On older versions, choose Reset advertising ID instead and repeat it monthly.
-   In the same Ads screen, turn off Ad personalization or Opt out of Ads Personalization if present.
-   Settings → Location → App location permissions → for each app, pick Only while using or Don't allow, and turn off Use precise location where it is not needed.
-   Settings → Google → Ads covers the Google-level setting on some phones; check both places.

On any phone

-   Delete apps you do not use. Every ad-supported app is a door, and the ones you forgot about are the ones you never audited.
-   Prefer paid or ad-free versions of apps you rely on daily; no ads means no bidstream.
-   Review permissions twice a year. Updates sometimes re-prompt, and you may have tapped Allow in a hurry.
-   Be skeptical of free VPN apps. Several appeared in the Gravy Analytics leak.
-   If you live in California, file one request at the state's DROP portal to ask every registered broker to delete your data. Elsewhere, you can request deletion broker by broker; it is tedious but it works.
-   Resetting or deleting your MAID breaks the historical chain. Data already sold stays sold, but new sightings no longer join the old profile.

None of this stops advertising. It stops a stranger from buying a map of your life for a few cents.

### The ten-minute version

Turn off tracking requests. Delete or reset your advertising ID. Downgrade precise location to approximate for every app that is not a map. Uninstall what you do not use. That is the whole checklist, and it takes less time than reading this article did.

The MAID was designed as a privacy improvement, and compared with what it replaced, it was one. The problem is not the identifier. The problem is an advertising supply chain that treats every ad impression as a chance to log where a device is, and a legal regime that calls a buried privacy policy consent. Until that changes, the only person reliably looking after your phone's data is you.

If this was useful, share it with one person who has never opened their phone's privacy settings. They have been MAID too.

### Sources

-   FTC v. Kochava case page and the May 4, 2026 FTC press release ([ftc.gov](https://www.ftc.gov))
-   Yale Journal on Regulation, analysis of the Kochava order
-   California Privacy Protection Agency, DROP announcement ([cppa.ca.gov](https://cppa.ca.gov))
-   Malwarebytes Labs on DROP, August 2026
-   9to5Mac and TechSpot coverage of the Gravy Analytics breach, January 2025
-   AdExchanger on Android advertising ID zeroing
-   AppsFlyer ATT opt-in data, reported by Advanced Television, April 2025