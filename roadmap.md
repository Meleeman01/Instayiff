first off, Gris is banned from Instayiff. he is the first honorary banned member.
Yam is also banned.

<h1>Instayiff Project</h1>
<p>this project aims to achieve a fun and playful site for furries and to stretch my abilities as a developer
this document will describe the specs for Instayiff</p>

<h2>descripton</h2>
<p>create an instagram like site for furries, and incentivise commissoned artists to create furry images, possibly lewd for dogecoin.</p>


there will need to be artist accounts which can be opened for a low fee of 10 dollars a year or 2000 dogecoin.  and user accounts that can be made for free but won't be able to post images unless they apply for an artist account and or have a fursuit, or search for an artist to make their furry. a user furry reporting system could be used on each image to show how furry an image is and if a user posts 5 non furry images in a row they are warned and i'll have to review it. a user that reports it can recieve a point for each accurate post that isn't remotely furry. 5 points will equal a 50 cent reward. a point is worth 10 cents. a system of rewards in dogecoin for users interacting with the site would be appropriate. following an artist account and logging in everday should give a user 1 point reward for using the site, which can be redeemd via dogecoin. non artist accounts are allowed 3 posts per diem with posts being able to rollover per week. (and 5 cents per additional post in dogecoin. doing this at scale would be interesting.) users would have to optionally register their dogecoin wallets. and this site should be ablet to handle most of the furry community but ultimately we'll see on launch. we should only let users know they have been awarded dogecoin once the transaction is confirmed in their wallet. artists can post as much as they want. each person has their public profile page that shows their fursona, or their real image if they choose to, plus their furry desires and a few little ice breaker questions to get to know them a bit plus their public wallet address to send money if they have it posted "will implement a wallet system in the future so users don't have to manually change the address". 

users and artists can have furry connections and can tailor them to close furs and associate furs. a recommender engine will find users and artists based on what a user has liked. all comments are welcome. for each user there will be a feed mixed with users they follow with some users that they don't. eventually this will be replaced by a recommender engine hopefully to drive up engagement.
<p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
all transactions from artist sales are subject to 20% platform tax including transaction fees;
if the art is an album over 3 pictures, only 15 percent tax is applied.
if the art is an animation over 10 seconds, only 10% percent tax is applied. 
users can optionally tip other users for posting relevant or funny content,
artists can be tipped up to 4 dollars or optionally you can pay their platform tax.

artist->user artsale, simply get notified when the transaction clears, when the Artist says the image is ready and will auto post the picture album or animation. a counter of funds will be displayed to the artist and payout will come after certain threshold probably $100 minimum<em>(for buyer protec purposes :3)</em> an artist will be paid upfront and will have a customizable payment options. optional backlog of orders could be a thing. 
artist to artist sale, simply get notified when the transaction clears, when the Artist says the image is ready and will auto post the picture, album or animation. 

appeals process for account bans, and payment disputes, the ban messages should explain clearly and have custom reasons for why a user was banned, and for payment disputes, x user and y user can be compared and the data from their behavior can be confirmed, accounts with requests older than 30 days will be flagged. flagged accounts will send urgent reminders to artists that they have a backlog with friendly weekly reminders about it in between, and that they wouldn't want unhappy customers. if found that the appeal is false, the requesting user will pay 50 doge. if they don't have it, then their account will be suspended (no posting), until they pay 50 doge. for the artist to not be found at fault, it must be uploaded to their profile, and will be demanded to immediately submit the art within 24 hours, or we issue a refund. if no art specifically made for the user is found in the artists account, then an immediate refund is issued. if a user can't make a refund for any reason they are officially suspended from posting until they pay us the amount needed to refund the user, which can be done via stripe or dogecoin, transaction fees included.
<p>-------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
^this will be the future, to cirvumvent this complexity, just allow tipping. for free and premium users. and make the tip fee 5% should the transaction fee go over 5 dollars this will be only 2.5% and over 8 dollars 1%; basically a system in place that will take the money to the site's public address and then award it to the artist. and this could be used for a hidden art feature.

average ratings for artists and users can be in paws!

filters maybe? and location of nearby furs? possibly a basic socket.io messaging service.

bots will be regulated with google recaptcha, may use woodcat's fish captcha as it's cool and fun.


so in short 

admin - in charge of users information, and security
mod - in charge of enforcing platform rules, will recieve lots accounts associated with non furry images.
artist - paid subscribers to the platform, also alternatively earned their way.
user - non paying user, can still create art, and find artists to commission and comment like all users.
anon - display a featured feed and allow a user to make a free account.

tech choices, laravel-mix for simplicity in building, and cache busting. node.js for dev speed, mysql for adonis (should this app gain substantial popularity i may switch to cassandra) adonis because i'm familiar with the backend and I am a primarily a front-end developer, in the future i can create a recommender engine to improve screen time.

<h2>Views</h2>
	user profile view
	user feed view
	user explore view
	user upload / camera view
	user favorites view
	contacts view
	admin media review view
	admin dashboard view
<h2>Controllers</h2>
	profile controller
	feed controller
	explore controller
	uploadMedia controller
	contacts controller
	favorites controller
	adminController
	tippingController
	postsController
	commentsController
	loginController/auth
	registerController
<h2>Database Schema</h2>
	
	users
		|_id,username, password, email, wallet_id //done
	roles
		|_id,admin, mod, premium, user, banned, suspended //done
	role_user
			|_id, user-id,role_id, created-at, updated-at //done
	user_data
			|_id,user-id, bio, species, Age, fav-music, fav-quote, wallet_id, favorites, //done
	contacts
			|_id, user_id , friends , close_friends, followers //this will work for noew lol
	posts
		 |_id, tag_id, user_id, album_id, picture_id, video_id, caption, likes, paw-count, tipable, created-at, updated-at. //done
	comments
			|_id, tag_id, post_id, text, created-at, updated-at,deleted-at //done
	replies
		   |_id, post_id, user_id, replyingto, comment_id,created-at,updated-at, deleted-at	//done
	albums
		  |_id, content, user_id, link, created-at, updated-at, deleted-at //done
	pictures
			|_id, album_id, user_id link, created-at, updated-at, deleted-at 
	videos
		  |_id, link, user_id, created-at, updated-at, deleted-at 
	tags
		|_id, tagname, created-at, updated-at, deleted-at
	filters
		   |_id, filter-name.


<h2>models</h2>
	<ul>
		<li>users</li>
		<li>role</li>
		<li>userData</li>
		<li>Contacts</li>
		<li>Posts</li>
		<li>Comments</li>
		<li>Replies</li>
		<li>Posts</li>
		<li>Albums</li>
		<li>Pictures</li>
		<li>Videos</li>
		<li>Tags</li>
	</ul>



