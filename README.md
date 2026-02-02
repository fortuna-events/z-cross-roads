# [Z] Cross Roads
*Where will you go next?*

> Part of the [Z-Apps](https://github.com/fortuna-events/z-app)

### [Tool link](https://roads.fortuna-events.fr)

## Data format

Format is made line by line

Header (1-2 line):
```txt
1    Title and description (html, <h1> on plain text)
2?   Hue, Saturation (optional, "180, 30%" by default)
```

After that each part is defined as follows:
```txt
1    Link(, color)
2    Label (html)
```

## Samples

[Sample 1](https://roads.fortuna-events.fr?z=AARDdPWDAjZNDFQkOAogtlABzB42NXAcGATucbREAeBYGgcWAABdl5z6OpNKE1gCCTlB94kPNYEECgGjAKbpHow1DAKPuKMdXJB4DwSAeAgCwXHz0WAlLAx0BghARSZCwegxgdgpABgNwJoK)

```txt
Where to find me
https://www.youtube.com/watch?v=dQw4w9WgXcQ
🎥 | My Youtube Channel
https://www.instagram.com/officialrickastley
📷 | My Instagram Profile
https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt
🎵 | My Spotify
```

[Sample 2](https://roads.fortuna-events.fr?z=AgofizcFLPmSPYTbqSB8xNeSaWSAExScjNGQO9NY0ZQwJEoRJkgWQDXYCFNCBCDfgCAb9D8pKlIv3TSiAL7xEQILmsGAwUagNuIAX0n-gmCQDqYF_GEwel90AAo4f6BBYSWoR2goDKAEKwGaCXQzFYCB2AbPBAFb-xK1URR5gCAIwHWpuZ5BrwTMXcKM90zj5Eg12mBfmsQmBoQGmGBE8cS3ZAAfqYQMZCAWBoC0ElMAUwIAYwK0QSWyxkfAESBrAwmcUDANAoiK0HA2AIeHBQVAYHAKTDEZBwLAAzdVAApYFEAFEHARBQAKVAAPVCAkkEAMNSRALNDgcWAwBAhBwPL6Nc4MlOAuDwAa3AYQZBaBYDAmUUaIrHAMwnPXAi6AgsuAACRAoRQpzAwaOAbBQTh7DHF4apLzzwaKgoEiArTAuCIpJALBN9AlJgihACvA7A2DMG0EAWCMfAjwCwD)

```txt
<h1><i icon=hand></i> Your choice <i icon=hand></i></h1><img src="https://external-preview.redd.it/C84ufieQl-aIoR4PrmEGpAEoT81zMhTr7UqG6_66XVM.jpg?auto=webp&s=652ab6f0854cc2e7375fe34c9944a650a46b08a4" />
https://www.nyan.cat/index.php?cat=tacnayn,red
<b><i icon=pill></i></b> Take the red pill
https://www.nyan.cat/index.php?cat=original,blue
<b><i icon=pill></i></b> Take the blue pill
```

## Tips

* [Material design colors](https://materialui.co/colors/) are available, you can use `class="red-500"` on your HTML or your buttons colors
* [Lucide icons](https://lucide.dev/icons) are available, you can use `<i icon=house></i>` on your HTML
* The `.button` class make links more beautifuls (can also be `.disabled` or colored `amber-300`)
* Admonitions can be made with things like `<div class='admonition success'><p class=admonition-title>Title</p><p>Content</p></div>`
* Progress bars can be made with things like `<div class=progress><div class=progress-bar style="width:25%"><p class=progress-label>25%</p></div></div>`
