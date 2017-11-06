var fs = require("fs");
var sampleObject = {
	"artists": [
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/58RMTlPJKbmpmVk1AmRK3h"
			},
			"followers": {
				"href": null,
				"total": 10202
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/58RMTlPJKbmpmVk1AmRK3h",
			"id": "58RMTlPJKbmpmVk1AmRK3h",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/3a94c91a83e2cba73c1ae7de207281b7989933b6",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/c4033b53a927963d3c7c0cd38ed60a03eb194400",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/31800bbbe09e9c150508792d611804f08c008f18",
					"width": 64
				}
			],
			"name": "Abidaz",
			"popularity": 59,
			"type": "artist",
			"uri": "spotify:artist:58RMTlPJKbmpmVk1AmRK3h"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/5ILMkt5lW4KAyTXMNYWaGF"
			},
			"followers": {
				"href": null,
				"total": 36863
			},
			"genres": [
				"deep pop edm",
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/5ILMkt5lW4KAyTXMNYWaGF",
			"id": "5ILMkt5lW4KAyTXMNYWaGF",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/d317b4895739e5cb4f8192432229d69baabfee4f",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/b7e7b3eb48e6d85082d165e19b8a850f31055f00",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/78ff0c23258c4286ce985c553441aa54cbcc03b3",
					"width": 160
				}
			],
			"name": "Dani M",
			"popularity": 68,
			"type": "artist",
			"uri": "spotify:artist:5ILMkt5lW4KAyTXMNYWaGF"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/32jiH9wPqnhmNRt0SOX9Jk"
			},
			"followers": {
				"href": null,
				"total": 1804
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/32jiH9wPqnhmNRt0SOX9Jk",
			"id": "32jiH9wPqnhmNRt0SOX9Jk",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/d4492baf8c78a93f72a442d2d1865cc02851cb94",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/489b59f2e9c89b238c0ee70f08863a14140eea11",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/d28c69d02030b9c7496661531e13921700a55523",
					"width": 64
				}
			],
			"name": "SamBoii",
			"popularity": 48,
			"type": "artist",
			"uri": "spotify:artist:32jiH9wPqnhmNRt0SOX9Jk"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/2DsNd8GBB1y1J0XMq0nT6s"
			},
			"followers": {
				"href": null,
				"total": 5960
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/2DsNd8GBB1y1J0XMq0nT6s",
			"id": "2DsNd8GBB1y1J0XMq0nT6s",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/396607c17607425fb80d29b1edd67481581b630d",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/4137413d51dedc6b8ac21b63ccf7478b892c51a3",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/cb4080142b0a00b624d2e0a24bc6f878b197c4ba",
					"width": 160
				}
			],
			"name": "Lilla Namo",
			"popularity": 43,
			"type": "artist",
			"uri": "spotify:artist:2DsNd8GBB1y1J0XMq0nT6s"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0RLWJI1UwVofxre5k3py4a"
			},
			"followers": {
				"href": null,
				"total": 25208
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/0RLWJI1UwVofxre5k3py4a",
			"id": "0RLWJI1UwVofxre5k3py4a",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/44d17a661189b0ac89bf787aad4010f597e38b51",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/e816262a1ee2845faac6ea26c0c89ba09f1ee9e9",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/c5df2a78f82f395cb9ef68d1a4a22e3053ccb7a7",
					"width": 160
				}
			],
			"name": "Malcolm B",
			"popularity": 55,
			"type": "artist",
			"uri": "spotify:artist:0RLWJI1UwVofxre5k3py4a"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0aV6DOiouImYTqrR5YlIqx"
			},
			"followers": {
				"href": null,
				"total": 4597
			},
			"genres": [
				"deep pop edm",
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/0aV6DOiouImYTqrR5YlIqx",
			"id": "0aV6DOiouImYTqrR5YlIqx",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/2b5efede3f3e87b8e6e0ec06e9e0368dee98e8f8",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/896f08a5e8c9c7d5a2797c8d05d013f9a2f91723",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/e15b267f55781a42cde282aa2ca211a4a555c552",
					"width": 160
				}
			],
			"name": "Alpis",
			"popularity": 55,
			"type": "artist",
			"uri": "spotify:artist:0aV6DOiouImYTqrR5YlIqx"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/7iL5mYnDruJbcp1eSq961R"
			},
			"followers": {
				"href": null,
				"total": 8391
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/7iL5mYnDruJbcp1eSq961R",
			"id": "7iL5mYnDruJbcp1eSq961R",
			"images": [
				{
					"height": 1000,
					"url": "https://i.scdn.co/image/0592f5d30328472458791bc00d962dfb22b3b044",
					"width": 1000
				},
				{
					"height": 640,
					"url": "https://i.scdn.co/image/9cc73aa4bd07bec15d1e6434a6984467e28dba42",
					"width": 640
				},
				{
					"height": 200,
					"url": "https://i.scdn.co/image/4f8913429a33ef9325c245d56f5d98b76251d53d",
					"width": 200
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/475b0779bc24ac9e8c36161d2bbd3fe1137f8da4",
					"width": 64
				}
			],
			"name": "Grillat & Grändy",
			"popularity": 53,
			"type": "artist",
			"uri": "spotify:artist:7iL5mYnDruJbcp1eSq961R"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/3D0rwfKngK6Rr80niHDLP7"
			},
			"followers": {
				"href": null,
				"total": 6355
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/3D0rwfKngK6Rr80niHDLP7",
			"id": "3D0rwfKngK6Rr80niHDLP7",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/f57ca60a0d5dbe8edfe7ecf9bbbe99bab6176b2e",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/aa34864b6ed783341b565f915740fb3c6d9b0af1",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/734dde42007b4f1ed9371259aadb7781ee32a581",
					"width": 160
				}
			],
			"name": "Denz",
			"popularity": 60,
			"type": "artist",
			"uri": "spotify:artist:3D0rwfKngK6Rr80niHDLP7"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/4qSaLWsra4abvHVVijKwlx"
			},
			"followers": {
				"href": null,
				"total": 7161
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/4qSaLWsra4abvHVVijKwlx",
			"id": "4qSaLWsra4abvHVVijKwlx",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/721abd3fb78ab54b8bb61dab4ee8946bcaa84b89",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/2020c498bc19c27e21d8f2e5b76eb80bba929641",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/f62c9dde435585a8656c767018c27968fcd9805c",
					"width": 64
				}
			],
			"name": "Matte Caliste",
			"popularity": 50,
			"type": "artist",
			"uri": "spotify:artist:4qSaLWsra4abvHVVijKwlx"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/53oE0nOoC4lJeqbG5Pjc5u"
			},
			"followers": {
				"href": null,
				"total": 3221
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/53oE0nOoC4lJeqbG5Pjc5u",
			"id": "53oE0nOoC4lJeqbG5Pjc5u",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/03049dbeaffcf5fedc6e6e18797a4d62ab220454",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/a3c1a4c3c21634068c954e4821eaac847cccfc01",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/969c085743c4812fce9c22755d760f4be5bc2a96",
					"width": 64
				}
			],
			"name": "Näääk & Nimo",
			"popularity": 50,
			"type": "artist",
			"uri": "spotify:artist:53oE0nOoC4lJeqbG5Pjc5u"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0ahIOvoOixJ6reWSvAsshX"
			},
			"followers": {
				"href": null,
				"total": 6432
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/0ahIOvoOixJ6reWSvAsshX",
			"id": "0ahIOvoOixJ6reWSvAsshX",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/915726b44c99f62fea26744b6ba6dbd5ee450fab",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/25900fdf3c5b901cb13cbff540a195c8cf71d470",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/ecd0c083abbd5b7260c59accd880aa7b15087b01",
					"width": 160
				}
			],
			"name": "Mwuana",
			"popularity": 65,
			"type": "artist",
			"uri": "spotify:artist:0ahIOvoOixJ6reWSvAsshX"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/6GFNszjoVtonHtwNFGUABT"
			},
			"followers": {
				"href": null,
				"total": 1272
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/6GFNszjoVtonHtwNFGUABT",
			"id": "6GFNszjoVtonHtwNFGUABT",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/8231081b3214da6daf86e06de53c9ebc30a87462",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/4f66877afecaa0df9ea158e04e47169690a8897b",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/7592aa5ad143177803089a38e3bbbd3a35ae813a",
					"width": 160
				}
			],
			"name": "Jaqe",
			"popularity": 54,
			"type": "artist",
			"uri": "spotify:artist:6GFNszjoVtonHtwNFGUABT"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0dCSPVQ30JS4cRaCTtbEmp"
			},
			"followers": {
				"href": null,
				"total": 8832
			},
			"genres": [
				"deep swedish hip hop",
				"deep swedish indie pop",
				"swedish hip hop",
				"swedish idol pop",
				"swedish indie pop",
				"swedish indie rock"
			],
			"href": "https://api.spotify.com/v1/artists/0dCSPVQ30JS4cRaCTtbEmp",
			"id": "0dCSPVQ30JS4cRaCTtbEmp",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/6122b3e0093c1e3f7d4c5d9639499aebb1d21390",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/bfe28648b5c7ecd41939ef733272cd60305eeeec",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/450e6d3d4b93d99d6b68ed6fe18cc5974af26b7c",
					"width": 160
				}
			],
			"name": "Erik Lundin",
			"popularity": 54,
			"type": "artist",
			"uri": "spotify:artist:0dCSPVQ30JS4cRaCTtbEmp"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0LdzDrRc2RESpGqwyhbE3t"
			},
			"followers": {
				"href": null,
				"total": 4225
			},
			"genres": [
				"deep swedish hip hop",
				"deep swedish indie pop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/0LdzDrRc2RESpGqwyhbE3t",
			"id": "0LdzDrRc2RESpGqwyhbE3t",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/1985a9db178a6622e847700d3ea789a3a05c397e",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/e04345d456c54d13627427a5e66555b82c860501",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/5d02d22d142e3d1d08de7ea9144badb9e6bc6cd2",
					"width": 160
				}
			],
			"name": "Madi Banja",
			"popularity": 49,
			"type": "artist",
			"uri": "spotify:artist:0LdzDrRc2RESpGqwyhbE3t"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0IQrfexpeCXMmHFX2jnT1Q"
			},
			"followers": {
				"href": null,
				"total": 1807
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/0IQrfexpeCXMmHFX2jnT1Q",
			"id": "0IQrfexpeCXMmHFX2jnT1Q",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/e7919c158461584a24d63aa4acb06cb5765bbb08",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/dcb82d3a6425549f8f00e57af7ff4d9c5af1e76f",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/2f3ee13b0884fe5698591761e58d4d6b524d35dd",
					"width": 64
				}
			],
			"name": "Michel Dida",
			"popularity": 50,
			"type": "artist",
			"uri": "spotify:artist:0IQrfexpeCXMmHFX2jnT1Q"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/2EWsHDexsSInArfFkhA2i6"
			},
			"followers": {
				"href": null,
				"total": 11334
			},
			"genres": [
				"deep swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/2EWsHDexsSInArfFkhA2i6",
			"id": "2EWsHDexsSInArfFkhA2i6",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/d7cc0caae3a4fe1f1e103aedcf2b2bb089b4b8b1",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/ba769c038eb296c915dcf97e98a9c3b2f39b5e03",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/65c7cb5e6d99b607e47bc35e8d4579d8de1e3e21",
					"width": 160
				}
			],
			"name": "Jireel",
			"popularity": 70,
			"type": "artist",
			"uri": "spotify:artist:2EWsHDexsSInArfFkhA2i6"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/1fhvwCr1HKEZgZYOrfsHyk"
			},
			"followers": {
				"href": null,
				"total": 49641
			},
			"genres": [
				"deep swedish hip hop",
				"swedish eurodance",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/1fhvwCr1HKEZgZYOrfsHyk",
			"id": "1fhvwCr1HKEZgZYOrfsHyk",
			"images": [
				{
					"height": 1000,
					"url": "https://i.scdn.co/image/9fef8dfa1579845c096d287375b0cf358fcf3bf9",
					"width": 1000
				},
				{
					"height": 640,
					"url": "https://i.scdn.co/image/ebbcb88f13385f3f2564546b397e11bf434f3a75",
					"width": 640
				},
				{
					"height": 200,
					"url": "https://i.scdn.co/image/92010bb95f63ded208d01b3f5f7a85fde94a58cd",
					"width": 200
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/d96fbfd79d7c95ec98d8763eea4bd2544f088977",
					"width": 64
				}
			],
			"name": "Ison & Fille",
			"popularity": 55,
			"type": "artist",
			"uri": "spotify:artist:1fhvwCr1HKEZgZYOrfsHyk"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/0rJEJ9T9JwC6ajdnMeqREY"
			},
			"followers": {
				"href": null,
				"total": 9896
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/0rJEJ9T9JwC6ajdnMeqREY",
			"id": "0rJEJ9T9JwC6ajdnMeqREY",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/d084a64d9581245dc2be6bcecf944e2ed709c763",
					"width": 640
				},
				{
					"height": 300,
					"url": "https://i.scdn.co/image/843e2b4e4d22a24f59f3f842113f38ba96b5a622",
					"width": 300
				},
				{
					"height": 64,
					"url": "https://i.scdn.co/image/31cd99922550f7efc8a77d2720927540bbddcd13",
					"width": 64
				}
			],
			"name": "Kaliffa",
			"popularity": 70,
			"type": "artist",
			"uri": "spotify:artist:0rJEJ9T9JwC6ajdnMeqREY"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/45hO5u8evtwIpSYefQHW8P"
			},
			"followers": {
				"href": null,
				"total": 6875
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop",
				"swedish idol pop"
			],
			"href": "https://api.spotify.com/v1/artists/45hO5u8evtwIpSYefQHW8P",
			"id": "45hO5u8evtwIpSYefQHW8P",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/1e26b39f796b7d759330d62afb10fb6dc77b4954",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/9f78a666901509c78cf9e4a96f1c2fa26b587925",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/157569b24addb24b2cf211feeb437014eabf67ec",
					"width": 160
				}
			],
			"name": "Lani Mo",
			"popularity": 60,
			"type": "artist",
			"uri": "spotify:artist:45hO5u8evtwIpSYefQHW8P"
		},
		{
			"external_urls": {
				"spotify": "https://open.spotify.com/artist/4XLISC9SzRTcR34fosyMtw"
			},
			"followers": {
				"href": null,
				"total": 15892
			},
			"genres": [
				"deep swedish hip hop",
				"swedish hip hop"
			],
			"href": "https://api.spotify.com/v1/artists/4XLISC9SzRTcR34fosyMtw",
			"id": "4XLISC9SzRTcR34fosyMtw",
			"images": [
				{
					"height": 640,
					"url": "https://i.scdn.co/image/01aa162d23e0f73f37f500932e26c0536687c67e",
					"width": 640
				},
				{
					"height": 320,
					"url": "https://i.scdn.co/image/0efe6b4c93902763d42d46c819c01a105771817c",
					"width": 320
				},
				{
					"height": 160,
					"url": "https://i.scdn.co/image/6b29fbbb5287f5dd51cd16fae6fc554740f2c706",
					"width": 160
				}
			],
			"name": "Stor",
			"popularity": 57,
			"type": "artist",
			"uri": "spotify:artist:4XLISC9SzRTcR34fosyMtw"
		}
	]
};


sampleObject.artists.forEach(function(k){
    console.log(k.id+'\n');
});