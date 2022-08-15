import styled from 'styled-components';

const StyledFBWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius300};

	.cff-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		margin: auto;
		border-radius: ${({ theme }) => theme.borderRadius300};
		padding: 1rem;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 60%;
			padding: 0;
		}
	}
	.cff-wrapper:after {
		content: '';
		display: table;
		clear: both;
	}
	 {
		float: left;
		width: 100%;
		margin: 0 auto;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.cff-wrapper-ctn {
		overflow: hidden;
		box-sizing: border-box;
	}
	.cff-wrapper-ctn.cff-wrapper-fixed-height {
		overflow: auto;
		overflow-x: hidden;
	}
	.cff-masonry-posts,
	.cff-posts-wrap,
	.cff-wrapper-ctn {
		position: relative;
		clear: both;
		height: 100%;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	.cff-posts-wrap-box-shadow {
		padding: 5px;
	}
	.cff-item {
		float: left;
		width: 100%;
		clear: both;
		padding: 20px 0 15px 0;
		margin: 0;
		border-bottom: 1px solid #ddd;
	}
	.cff-item:first-child {
		padding-top: 0;
	}
	.cff-item.cff-box,
	.cff-item.cff-box:first-child {
		padding: 15px;
		margin: 8px 0;
		background: rgba(255, 255, 255, 0.5);
		border: none;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.cff-item.cff-box:first-child {
		margin-top: 0;
	}
	.cff-item.cff-box:last-child {
		margin-bottom: 0;
	}
	.cff-item.cff-shadow {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
	}
	.cff-header {
		width: 100%;
		margin: 0 0 15px 0;
		padding: 0;
		line-height: 1;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.cff-header .fa,
	.cff-header svg {
		margin: 0 10px 0 0;
		padding: 0;
	}
	.cff-visual-header {
		margin-bottom: 24px !important;
	}
	.cff-visual-header .cff-header-hero {
		width: 100%;
		max-width: 660px;
		height: 360px;
		position: relative;
		overflow: hidden;
	}
	.cff-visual-header .cff-header-hero img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1;
	}
	.cff-visual-header .cff-likes-box {
		position: absolute;
		bottom: 10px;
		right: 10px;
		padding: 5px;
		background: #eee;
		line-height: 1;
		border-radius: 2px;
		color: #445790;
	}
	.cff-visual-header .cff-likes-box .cff-square-logo {
		float: left;
		display: inline-block;
		line-height: 0;
	}
	.cff-visual-header .cff-likes-box .cff-square-logo svg {
		width: 18px;
		vertical-align: top;
	}
	.cff-visual-header .cff-likes-box .cff-likes-count {
		float: left;
		display: inline-block;
		margin-left: 8px;
		vertical-align: top;
		font-size: 15px;
		line-height: 20px;
	}
	.cff-visual-header .cff-header-inner-wrap {
		position: relative;
		display: block;
		text-decoration: none !important;
		overflow: visible;
	}
	.cff-visual-header .cff-header-inner-wrap a {
		color: inherit !important;
		border: 0;
	}
	.cff-visual-header .cff-header-img img {
		display: block;
		width: 100px;
		border-radius: 3px;
		padding: 0;
		margin: 0;
	}
	.cff-visual-header.cff-has-cover .cff-header-img img {
		border: 2px solid #fff;
		width: 100px;
		height: 100px;
	}
	.cff-visual-header .cff-header-img {
		position: absolute;
		display: inline-block;
		line-height: 1;
	}
	.cff-visual-header.cff-has-cover .cff-header-img {
		top: -25px;
		left: 10px;
	}
	.cff-visual-header .cff-header-text {
		display: inline-block;
		float: left;
		margin: 20px 0 0 120px;
	}
	.cff-visual-header .cff-header-text h3,
	.cff-visual-header .cff-header-text h3 {
		display: inline-block;
		width: auto;
		margin: 0 8px 0 0;
		padding: 0;
		font-size: 1.2em;
		line-height: 1.2em;
	}
	.cff-visual-header .cff-header-text {
		padding-top: 10px;
		margin: 0;
	}
	.cff-visual-header.cff-has-name {
		min-height: 100px;
		border-radius: ${({ theme }) => theme.borderRadius300};
	}
	.cff-visual-header.cff-has-cover.cff-has-name .cff-header-text {
		min-height: 75px;
	}
	.cff-visual-header.cff-has-name .cff-header-text {
		margin-left: 120px;
	}
	.cff-visual-header.cff-has-cover.cff-has-name .cff-header-text {
		margin-left: 125px;
	}
	.cff-visual-header.cff-has-name .cff-header-text {
		padding-top: 30px;
	}
	.cff-visual-header.cff-has-name.cff-has-about .cff-header-text,
	.cff-visual-header.cff-has-name.cff-has-cover .cff-header-text {
		padding-top: 10px;
	}
	.cff-visual-header .cff-header-inner-wrap .cff-bio,
	.cff-visual-header .cff-header-inner-wrap .cff-bio {
		display: block;
		width: 100%;
		clear: both;
		margin: 3px 0 0 0;
		padding: 0;
		line-height: 1.2em;
	}
	.cff-visual-header .cff-header-name {
		float: left;
		padding: 0 5px 2px 0;
	}
	.cff-visual-header .cff-bio-info {
		font-size: 0.9em;
		line-height: 1.7;
	}
	.cff-visual-header .cff-bio-info svg {
		display: inline-block;
		width: 1em;
		vertical-align: middle;
		position: relative;
		top: -2px;
	}
	.cff-posts-count svg {
		padding-right: 3px;
	}
	.cff-header-inner-wrap:after,
	.cff-header-text:after {
		display: table;
		clear: both;
		content: ' ';
	}
	.cff-less {
		display: none;
	}
	.cff-default-styles a {
		text-decoration: none;
	}
	.cff-default-styles a:focus,
	.cff-default-styles a:hover {
		text-decoration: underline;
	}
	.cff-post-text-link {
		display: block;
	}
	.cff-post-text {
		width: 100%;
		float: left;
	}
	.cff-post-desc,
	h3,
	h4,
	h5,
	h6,
	p {
		float: left;
		width: 100%;
		clear: both;
		padding: 0;
		margin: 5px 0;
		word-wrap: break-word;
	}
	.cff-default-styles .cff-post-desc,
	.cff-default-styles h3,
	.cff-default-styles h4,
	.cff-default-styles h5,
	.cff-default-styles h6,
	.cff-default-styles p {
		line-height: 1.4;
	}
	.cff-date {
		float: left;
		min-width: 50px;
		width: auto;
	}
	.cff-default-styles .cff-date {
		font-size: 11px;
	}
	.cff-author {
		float: left;
		clear: both;
		margin: 0 0 15px 0;
		padding: 0;
		line-height: 1.2;
		width: 100%;
	}
	.cff-author a {
		text-decoration: none;
		border: none;
	}
	.cff-author-img {
		float: left;
		width: 40px;
		height: 40px;
		margin: 0 0 0 -100% !important;
		font-size: 0;
		background: #eee;
		background: url(../img/cff-avatar.png) no-repeat;
		background-size: 100%;
		border-radius: 50%;
	}
	.cff-author img {
		float: left;
		margin: 0 !important;
		padding: 0 !important;
		border: none !important;
		font-size: 0;
		border-radius: 50%;
	}
	.cff-author-img.cff-no-consent img {
		display: none;
	}
	.cff-no-consent .cff-header-text {
		margin-left: 0 !important;
	}
	.cff-no-consent .cff-header-hero,
	.cff-no-consent .cff-header-img {
		display: none !important;
	}
	.cff-author .cff-author-text span.cff-page-name {
		display: table-cell;
		vertical-align: middle;
		height: 40px;
		margin: 0;
		font-weight: 700;
		padding-left: 50px;
		float: none;
	}
	.cff-author .cff-story {
		font-weight: 400;
	}
	.cff-default-styles .cff-author a {
		text-decoration: none;
	}
	.cff-author.cff-no-author-info .cff-date {
		margin-top: 12px !important;
	}
	.cff-author.cff-no-author-info .cff-author-img {
		width: 40px;
		height: 40px;
		background: url(../img/cff-avatar.png) no-repeat;
		margin: 0 !important;
	}
	.cff-author .cff-author-text {
		float: left;
		width: 100%;
	}
	.cff-author .cff-date,
	.cff-author .cff-page-name {
		float: left;
		clear: both;
		width: auto;
		margin: 0 0 0 50px !important;
	}
	.cff-default-styles .cff-author .cff-author-text * {
		font-weight: 700;
		line-height: 1.2;
	}
	.cff-author .cff-date {
		color: black;
		font-size: 11px;
		margin-top: 2px !important;
		margin-bottom: 0 !important;
	}
	.cff-default-styles .cff-author .cff-date {
		font-weight: 400;
	}
	.cff-author .cff-page-name.cff-author-date {
		float: left;
		padding: 3px 0 0 0;
		font-size: 14px;
	}
	.cff-cta-link a,
	.cff-media-link .fa {
		display: inline-block;
		width: auto;
		padding: 5px 7px 5px 6px;
		margin-right: 6px;
		border: 1px solid #eee;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 3px;
		background: rgba(0, 0, 0, 0.02);
	}
	.cff-cta-link a:hover,
	.cff-media-link .fa:hover {
		background: #f9f9f9;
		background: rgba(0, 0, 0, 0.03);
		text-decoration: none;
	}
	.cff-cta-link a {
		padding: 5px 15px;
	}
	.cff-break-word {
		word-break: break-all;
	}
	.cff-expand {
		display: none;
	}
	.cff-default-styles .cff-expand a {
		font-size: 11px;
		font-weight: 400;
	}
	.cff-shared-link {
		float: left;
		clear: both;
		width: 100%;
		padding: 5px 10px;
		margin: 10px 0 5px 0;
		background: #f9f9f9;
		border: 1px solid #d9d9d9;
		background: rgba(0, 0, 0, 0.02);
		border: 1px solid rgba(0, 0, 0, 0.07);
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.cff-no-styles {
		background: 0 0;
		border: none;
		padding: 0;
	}
	.cff-link {
		float: left;
		clear: both;
		max-width: 20%;
		margin: 10px 0 0 0;
	}
	.cff-link img {
		max-width: 100%;
	}
	.cff-link-title {
		float: left;
		clear: both;
		width: 100%;
		display: block;
	}
	.cff-default-styles .cff-link-title {
		font-weight: 700;
	}
	p.cff-link-title {
		margin: 5px 0 0 0;
	}
	.cff-text-link {
		float: left;
		clear: none;
		width: 72%;
		margin-left: 3%;
		padding: 0 0 5px 0;
	}
	.cff-link-caption {
		margin: 0;
	}
	.cff-default-styles .cff-link-caption {
		font-size: 12px;
	}
	.cff-text-link.cff-no-image {
		width: 100%;
		margin-left: 0;
	}
	.cff-post-desc {
		margin: 5px 0 0 0;
	}
	.cff-details {
		float: left;
		clear: none;
		width: 100%;
		margin: 0;
		padding: 0;
	}
	.cff-details h5 {
		margin: 0 0 5px 0;
	}
	.cff-default-styles .cff-details h5 {
		padding: 0;
		font-size: 16px;
	}
	.cff-default-styles .cff-details p {
		font-size: 14px;
	}
	.cff-timeline-event .cff-date,
	.cff-timeline-event .cff-info,
	.cff-timeline-event .cff-timeline-event-title,
	.cff-timeline-event .cff-where {
		display: block;
		width: 100%;
		clear: both;
	}
	.cff-details .cff-info {
		padding: 10px 0 0 0;
	}
	.cff-default-styles .cff-details .cff-info {
		line-height: 1.2;
	}
	.cff-desc-wrap {
		float: left;
		width: 100%;
	}
	.cff-note-title {
		display: block;
		font-weight: 700;
		padding-bottom: 5px;
	}
	.cff-post-links {
		float: left;
		clear: none;
		padding: 5px 0 0 0;
		margin: 0;
	}
	.cff-default-styles .cff-post-links {
		font-size: 11px;
	}
	.cff-post-links.cff-left {
		float: left;
		margin: 8px 0;
	}
	.cff-default-styles .cff-post-links a {
		font-size: 11px;
	}
	.cff-post-links a:first-child {
		padding-left: 0;
		margin: 0;
	}
	.cff-dot {
		padding: 0 5px;
	}
	.cff-share-container {
		position: relative;
		display: inline;
	}
	.cff-share-tooltip {
		display: none;
		position: absolute;
		z-index: 1000;
		bottom: 22px;
		right: -40px;
		width: 110px;
		padding: 3px 5px 4px 5px;
		margin: 0;
		background: #333;
		color: #eee;
		font-size: 12px;
		line-height: 1.3;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.cff-share-tooltip .fa-play {
		position: absolute;
		font-size: 8px;
		bottom: -6px;
		left: 50%;
		margin-left: -3px;
		color: #333;
	}
	.cff-share-tooltip a .fa,
	.cff-share-tooltip a svg {
		font-size: 16px;
		margin: 0;
		padding: 5px;
	}
	.cff-share-tooltip a {
		display: block;
		float: left;
		margin: 0 !important;
		padding: 0 !important;
		color: #eee !important;
		opacity: 0;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border-radius: 4px;
	}
	.cff-share-tooltip a:hover {
		color: #fff !important;
	}
	.cff-share-tooltip .cff-facebook-icon:hover {
		background: #3b5998;
	}
	.cff-share-tooltip .cff-twitter-icon:hover {
		background: #00aced;
	}
	.cff-share-tooltip .cff-google-icon:hover {
		background: #dd4b39;
	}
	.cff-share-tooltip .cff-linkedin-icon:hover {
		background: #007bb6;
	}
	.cff-share-tooltip .cff-pinterest-icon:hover {
		background: #cb2027;
	}
	.cff-share-tooltip .cff-email-icon:hover {
		background: #dd4b39;
	}
	.cff-share-tooltip a.cff-show {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
	.cff-likebox {
		float: left;
		width: 100%;
		position: relative;
		margin: 20px 0 0 0;
	}
	.fb_iframe_widget {
		border: none;
		overflow: hidden;
	}
	.cff-likebox .fb_iframe_widget {
		width: 100%;
	}
	.cff-likebox .fb_iframe_widget span {
		width: 100% !important;
	}
	.cff-likebox .fb_iframe_widget iframe {
		margin: 0;
		position: relative;
		top: 0;
		left: 0;
		width: 100% !important;
		height: 100%;
	}
	.cff-likebox.cff-top.cff-outside {
		margin-bottom: 10px;
	}
	.cff-likebox.cff-bottom.cff-outside {
		margin-top: 10px;
	}
	.cff-fixed-height {
		padding: 5px 10px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.cff-error-msg {
		display: none;
		position: relative;
		font-size: 12px;
		font-family: sans-serif;
		padding: 8px 12px;
		border: 1px solid #ddd;
		margin-bottom: 10px;
		clear: both;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		-ms-border-radius: 3px;
		-o-border-radius: 3px;
		border-radius: 3px;
	}
	.cff-error-msg p {
		float: none;
	}
	.cff-error-msg .cff_notice_dismiss {
		position: absolute;
		top: 4px;
		right: 8px;
	}
	-error-reason {
		display: none;
		padding: 5px 0 0 0;
		clear: both;
	}
	.cff-default-styles .cff-credit {
		font-size: 11px;
	}
	.cff-default-styles .cff-credit a {
		text-decoration: none;
	}
	.cff-credit img {
		float: left;
		margin: -2px 5px 0 0;
	}
	.cff-credit .fa {
		padding-right: 5px;
		font-size: 13px;
	}
	.cff-credit a {
		display: flex;
		align-items: center;
	}
	.cff-screenreader {
		text-indent: -9999px !important;
		display: block !important;
		width: 0 !important;
		height: 0 !important;
		line-height: 0 !important;
	}
	@media all and (max-width: 640px) {
		.cff-width-resp {
			width: 100% !important;
		}

		.cff-wrapper .cff-visual-header.cff-has-name .cff-header-text {
			margin-left: 95px;
		}
		.cff-wrapper .cff-visual-header.cff-has-cover.cff-has-name .cff-header-text {
			margin-left: 130px;
		}
	}
	.cff-comment .cff-comment-text img,
	img.emoji,
	-lightbox-wrapper .cff-comment .cff-comment-text img,
	-lightbox-wrapper img.emoji {
		float: none;
		max-width: 100%;
	}
	.cff-linebreak {
		display: block;
		height: 5px;
	}
	.cff-masonry .cff-item.cff-box {
		margin-left: 1.5%;
		margin-right: 1.5%;
	}
	.cff-masonry {
		box-sizing: border-box;
	}
	.cff-masonry .cff-item,
	.cff-masonry .cff-item:first-child {
		padding-top: 20px;
		margin-top: 0;
	}
	.cff-masonry .cff-item,
	.cff-masonry .cff-likebox {
		float: none;
		display: inline-block;
		width: 30.3%;
		margin: 0 1.5%;
		margin-bottom: 20px;
	}
	.cff-masonry.cff-opaque-comments .cff-item {
		z-index: 1;
	}
	.cff-masonry.masonry-2-desktop .cff-item {
		width: 47%;
		margin: 0 1.5%;
	}
	.cff-masonry.masonry-4-desktop .cff-item {
		width: 22%;
		margin: 0 1.5%;
	}
	.cff-masonry.masonry-5-desktop .cff-item {
		width: 17%;
		margin: 0 1.5%;
	}
	.cff-masonry.masonry-6-desktop .cff-item {
		width: 13.516%;
		margin: 0 1.5%;
	}
	@media (min-width: 481px) and (max-width: 800px) {
		.cff-masonry .cff-item,
		.cff-masonry .cff-likebox,
		.cff-masonry.masonry-2-desktop .cff-item,
		.cff-masonry.masonry-3-desktop .cff-item,
		.cff-masonry.masonry-4-desktop .cff-item,
		.cff-masonry.masonry-5-desktop .cff-item,
		.cff-masonry.masonry-6-desktop .cff-item {
			width: 100%;
			margin: 0;
		}
		.cff-masonry.masonry-2-tablet .cff-posts-wrap .cff-item,
		.cff-masonry.masonry-2-tablet .cff-posts-wrap .cff-likebox {
			width: 47%;
			margin-left: 1.5%;
			margin-right: 1.5%;
		}
		.cff-masonry.masonry-3-tablet .cff-posts-wrap .cff-item,
		.cff-masonry.masonry-3-tablet .cff-posts-wrap .cff-likebox {
			width: 30.3%;
			margin-left: 1.5%;
			margin-right: 1.5%;
		}
		.cff-masonry.masonry-4-tablet .cff-item,
		.cff-masonry.masonry-4-tablet .cff-likebox {
			width: 22%;
			margin-left: 1.5%;
			margin-right: 1.5%;
		}
	}
	@media (max-width: 480px) {
		.cff-masonry .cff-item,
		.cff-masonry .cff-likebox,
		.cff-masonry.masonry-2-desktop .cff-item,
		.cff-masonry.masonry-3-desktop .cff-item,
		.cff-masonry.masonry-4-desktop .cff-item,
		.cff-masonry.masonry-5-desktop .cff-item,
		.cff-masonry.masonry-6-desktop .cff-item {
			width: 100%;
			margin: 0;
		}
		.cff-masonry.masonry-2-mobile .cff-posts-wrap .cff-item,
		.cff-masonry.masonry-2-mobile .cff-posts-wrap .cff-likebox {
			width: 47%;
			margin-left: 1.5%;
			margin-right: 1.5%;
		}
		.cff-masonry.masonry-3-mobile .cff-posts-wrap .cff-item,
		.cff-masonry.masonry-3-mobile .cff-posts-wrap .cff-likebox {
			width: 30.3%;
			margin-left: 1.5%;
			margin-right: 1.5%;
		}
		.cff-masonry.cff-mob-cols-1 .cff-posts-wrap .cff-item {
			width: 100%;
		}
	}
	.cff-masonry .cff-comments-box {
		position: relative;
		z-index: 999;
	}
	.cff-masonry .cff-comment-attachment,
	.cff-masonry .cff-comment-replies-box {
		max-width: 100%;
	}
	.cff-masonry .cff-load-more {
		display: block;
		float: left;
		clear: both;
	}
	.cff-masonry.cff-masonry-css {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20px;
	}
	.cff-masonry.cff-masonry-css {
		-webkit-column-gap: 20px;
		-moz-column-gap: 20px;
		column-gap: 20px;
		-webkit-column-fill: auto;
		column-fill: unset;
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
		margin: 0;
	}
	.cff-masonry.cff-masonry-css.masonry-2-desktop {
		-webkit-column-count: 2;
		-moz-column-count: 2;
		column-count: 2;
		margin: 0;
	}
	.cff-masonry.cff-masonry-css.masonry-4-desktop {
		-webkit-column-count: 4;
		-moz-column-count: 4;
		column-count: 4;
		margin: 0;
	}
	.cff-masonry.cff-masonry-css.masonry-5-desktop {
		-webkit-column-count: 5;
		-moz-column-count: 5;
		column-count: 5;
		margin: 0;
	}
	.cff-masonry.cff-masonry-css.masonry-6-desktop {
		-webkit-column-count: 6;
		-moz-column-count: 6;
		column-count: 6;
		margin: 0;
	}
	.cff-masonry.cff-masonry-css .cff-item,
	.cff-masonry.cff-masonry-css .cff-likebox,
	.cff-masonry.cff-masonry-css.masonry-2-desktop .cff-item,
	.cff-masonry.cff-masonry-css.masonry-4-desktop .cff-item,
	.cff-masonry.cff-masonry-css.masonry-5-desktop .cff-item,
	.cff-masonry.cff-masonry-css.masonry-6-desktop .cff-item {
		float: none;
		display: inline-block;
		width: 100%;
		margin: 0 0 12px 0;
	}
	.cff-masonry.cff-masonry-css .cff-likebox {
		width: 99.5%;
	}
	.cff-masonry.cff-masonry-css .cff-load-more {
		margin: 0 0 10px 0;
		position: relative;
		bottom: 0;
	}
	@media only screen and (max-width: 780px) {
		.cff-masonry.cff-masonry-css,
		.cff-masonry.cff-masonry-css.masonry-2-desktop,
		.cff-masonry.cff-masonry-css.masonry-4-desktop,
		.cff-masonry.cff-masonry-css.masonry-5-desktop,
		.cff-masonry.cff-masonry-css.masonry-6-desktop {
			-webkit-column-count: 1;
			-moz-column-count: 1;
			column-count: 1;
		}
		.cff-masonry.cff-masonry-css.masonry-2-mobile {
			-webkit-column-count: 2;
			-moz-column-count: 2;
			column-count: 2;
			margin: 0;
		}
		.cff-masonry.cff-masonry-css.masonry-2-mobile,
		.cff-masonry.cff-masonry-css.masonry-2-mobile .cff-item {
			width: 100%;
		}
	}
	.cff-disable-masonry {
		height: auto !important;
	}
	.cff-disable-masonry .cff-item,
	.cff-disable-masonry .cff-likebox {
		position: relative !important;
		top: auto !important;
	}
	.cff-dark .cff-album-item,
	.cff-dark .cff-item,
	.cff-dark .cff-item.cff-box,
	.cff-dark .cff-item.cff-box:first-child {
		background-color: rgba(0, 0, 0, 0.85);
		color: rgba(255, 255, 255, 0.75);
	}
	.cff-dark .cff-item a {
		color: #fff;
		text-decoration: underline;
	}
	.cff-dark .cff-date {
		color: rgba(255, 255, 255, 0.5);
	}
	.cff-dark .cff-album-info a,
	.cff-dark .cff-author-date,
	.cff-dark .cff-post-links a {
		color: #fff;
	}
	.cff-dark .cff-album-info p {
		color: rgba(255, 255, 255, 0.75);
	}
	.cff-light .cff-album-item,
	.cff-light .cff-item,
	.cff-light .cff-item.cff-box,
	.cff-light .cff-item.cff-box:first-child {
		background-color: rgba(255, 255, 255, 0.95);
		color: rgba(0, 0, 0, 0.8);
	}
	.cff-light .cff-item a {
		color: #000;
		text-decoration: underline;
	}
	.cff-light .cff-date {
		color: rgba(0, 0, 0, 0.5);
	}
	.cff-light .cff-album-info a,
	.cff-light .cff-author-date,
	.cff-light .cff-post-links a {
		color: #000;
	}
	.cff-light .cff-album-info p {
		color: rgba(0, 0, 0, 0.7);
	}
	.cff-num-diff-hide {
		display: none !important;
	}
	.cff-gdpr-notice {
		max-width: 100%;
		box-sizing: border-box;
		padding: 8px 15px;
		margin: 0;
		font-size: 12px;
		background: #fdf7f7;
		display: inline-block;
		border-radius: 5px;
		border: 1px solid #e4b1b1;
		line-height: 1.3;
		display: none;
	}
`;

const FacebookWall = ({ content }) => <>{content && <StyledFBWrapper dangerouslySetInnerHTML={{ __html: content }} />}</>;
export default FacebookWall;
