import AuthenticatedApiService from "../authenticatedApiService";
import { default as pathToRegexp } from "path-to-regexp";

const ID = 10000;

export default class Service extends AuthenticatedApiService {
  constructor() {
    super();

    this.id = ID;
    this.pages = [
      {
        id: (this.id += 1),
        meta: {
          title: "Page not Found",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: "<p>The page you are looking for was not found.</p>",
        template: "Page not Found",
        name: "Page not Found",
        title: "404 - Page not Found!",
        summary: "",
        url: "/page-not-found",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Privacy Policy",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p>This Privacy Policy explains how we will use the information that we collect about you when&nbsp;you use this Site. Your use of this Site will also be subject to our&nbsp;Terms of Use&nbsp;and,&nbsp;if you&nbsp;purchase any Product, our&nbsp;Returns Policy. Terms defined in the Terms of Use will also be&nbsp;applicable to this Privacy Policy.</p>
          <p><br />1.When we collect your personal information</p>
          <p>You can visit and browse the Site without having to provide any personal information. However,you will need to provide personal information when you register an account, place an order or&nbsp;make a Submission.</p>
          <p>2.The personal information we collect</p>
          <p>The personal information we collect will include your title, name, gender, email address, postal&nbsp;address, delivery address (if different), telephone number and mobile number. We may also&nbsp;collect personal information provided by you together with or as part of any Submission.</p>
          <p>We do not collect payment details, payment card details or bank account details. These details&nbsp;are collected during the secure purchase process facilitated by our payment service provider,&nbsp;known as PayFort, and these details are never shared with us.</p>
          <p>3.Other information we collect</p>
          <p>We will collect certain information (such as time and date of your visit to the Site, pages&nbsp;viewed, IP address and browser used to access the Site) whenever you visit the Site. We use&nbsp;this information to understand how our Site is used and to improve&nbsp;performance&nbsp;the Site. This&nbsp;information is anonymized and cannot be linked back to you as an individual.</p>
          <p>4.How we use your personal information</p>
          <p>We will use your personal information to:</p>
          <ul>
          <li>Establish and administer your account, process and deliver your Orders and to provide&nbsp;you with services and information;</li>
          <li>Improve the Site layout, Content and functionality; and</li>
          <li>Carry out research on our users&rsquo; demographics and tastes.&nbsp;</li>
          </ul>
          <p>We may use your personal information to send you information about our Products and&nbsp;services and those of our associated companies. You can choose to opt out of this at any time&nbsp;by clicking on the &ldquo;unsubscribe&rdquo; link in any marketing email that we send to you.</p>
          <p><br />5.Sharing your personal information with third parties</p>
          <p>We will share your personal information with:</p>
          <ul>
          <li>Our shipping partners, for Order delivery purposes;</li>
          <li>Third parties who provide us with services, in order to provide us with those services<br />(for&nbsp;example:&nbsp;marketing, website administration and fraud protection services); and</li>
          <li>Any governmental or legal authority if required by law</li>
          </ul>
          <p>All credit/debit cards details and personally identifiable information will NOT be stored, sold,&nbsp;shared, rented or leased to any third parties.</p>
          <p><br />We may transfer our databases containing your personal information if we sell our business or&nbsp;part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your personal&nbsp;information to third parties without obtaining your prior consent. The Site may contain links to&nbsp;other sites or frames of other sites. Please be aware that we are not responsible for the privacy&nbsp;practices or content of those third other sites, nor for any third party to whom we transfer your&nbsp;personal information in accordance with our Privacy Policy.</p>
          <p><br />6.Use of Social Plugins</p>
          <p><br />The Site uses social plugins (&ldquo;<strong>plugins</strong>&rdquo;) provided by third parties including Facebook, Instagram,&nbsp;What&rsquo;s App and Pinterest (&ldquo;<strong>PI</strong>&nbsp;<strong>Providers</strong>&rdquo;)).</p>
          <p><br />When you visit a page that contains a plugin, your browser establishes a direct connection to&nbsp;the servers of the relevant PI Provider (which may be located overseas) and your plugin content&nbsp;is transferred to your browser. The relevant PI Provider is then able to receive information&nbsp;about your having accessed that page of the Site. This occurs even if you do not have an&nbsp;account with the PI Provider or are not logged into it at the time.</p>
          <p><br />If you are logged into the website of a PI Provider, and you interact with the relevant plugins on&nbsp;our Site (for example by clicking &ldquo;Like&rdquo; or entering a comment) the corresponding information&nbsp;is transmitted from your browser directly to the PI Provider server and stored by it. The&nbsp;information may also be published on your PI Provider account page and visible to those whom&nbsp;you have given access as &ldquo;friends&rdquo; or otherwise.</p>
          <p><br />You can block plugins by using add-ons for your browser, like the &ldquo;Facebook Blocker&rdquo;.For information on the purpose and scope of data collection by Facebook, Pinterest and&nbsp;Instagram and how it is processed and used, as well as your rights in this respect and settings&nbsp;options for protecting your privacy please read the privacy policy of the relevant PI</p>
          <p><br />Provider:&nbsp;Facebook,&nbsp;Instagram,</p>
          <p>&nbsp;<br />7.Cookies</p>
          <p>It is not necessary to accept cookies to visit our Site. However, if you would like to place an Order or add an item to your shopping basket, you will need to set your browser to acceptcookies so you can use the relevant functions. The cookies we use are never used to store any&nbsp;personal information and cannot be traced back to an individual user. We use the anonymized&nbsp;information we receive from the cookies to understand how our customers use our Site, to&nbsp;improve the Site, to tailor advertisements to your tastes and to make the Site easier for you to&nbsp;use.</p>
          <p><br />This Site uses Google Analytics which uses cookies to help us analyze how our Site is used. The&nbsp;information generated by the cookie about your use of the Site (including your IP address) will&nbsp;be transmitted to and stored by Google on servers in the United States. Google will use this&nbsp;information for the purpose of evaluating your use of the Site, compiling reports on website&nbsp;activity for website operators and providing other services relating to website activity and&nbsp;internet usage. Google may also transfer this information to third&nbsp;parties where required to do&nbsp;so by law, or where such third parties process the information on Google&amp;#39;s behalf. Google will&nbsp;not associate your IP address with any other data held by Google.</p>
          <p><br />8.Security</p>
          <p>We have in place technical and security measures to prevent unauthorized access to oraccidental loss or destruction of your personal information that is stored by us. We collect your&nbsp;personal information on a secure server, and we use firewalls on our servers. Whilst we are&nbsp;unable to guarantee 100% security, this makes it hard for a hacker to decrypt your details. Our&nbsp;security procedures mean that we may occasionally request proof of identity before we&nbsp;disclose personal information to you. You are responsible for protecting against&nbsp;unauthorized&nbsp;access to and use of your password and account.</p>
          <p><br />9.Consent<br />By using our Site or by submitting personal information to the Site or to us or to our agents, you&nbsp;consent to our use of your personal information in the manner set out in this Privacy Policy.</p>
          <p>All credit/debit cards details and personally identifiable information will NOT be stored, sold,shared, rented or leased to any third parties.&nbsp;</p>
          <p>The Website Policies and Terms &amp;amp; Conditions may be changed or updated occasionally to meet&nbsp;the requirements and standards. Therefore, the Customers&rsquo; are encouraged to frequently visit&nbsp;these sections in order to be updated about the changes on the website. Modifications will be&nbsp;effective on the day they are posted.</p>
          <p>10.Access and contact</p>
          <p>The Website Policies and Terms &amp;amp; Conditions may be changed or updated occasionally to meet&nbsp;accepted requirements and standards. Therefore, Customers are encouraged to frequently visit&nbsp;these sections in order to be updated about the changes on the website. Modifications will be&nbsp;effective on the day they are posted.</p>
          <p>You may request access to your personal information, and you may request that we corrected&nbsp;any inaccuracies in that personal information. At any&nbsp;stage&nbsp;you also have the right to ask us to&nbsp;stop using your personal information for direct marketing purposes. You may contact us&nbsp;at&nbsp;mikyajy@kojamjoom.com&nbsp;or Kamal Osman Jamjoom Group LLC, Sultan Business Center, 3rd&nbsp;Floor, Unit 301, Oud Metha Road, Dubai - UAE.</p>`,
        template: "Privacy Policy",
        name: "Privacy Policy",
        title: "Privacy Policy",
        summary: "",
        url: "/:store/privacy-policy",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Terms & Conditions",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><strong>USE OF THE SITE</strong></p>
          <p>You may only use this Site:</p>
          <ul>
          <li>if you are at least 18 years of age or are using the Site under the supervision of yourparent(s) or legal guardian; and</li>
          <li>on your own behalf and not for any commercial purposes unless explicitly authorized byus in writing.</li>
          </ul>
          <p>Any information you provide to us or submit to the Site for any registration or subscriptionpurpose or otherwise must be accurate and current. You must promptly update suchinformation if there are any changes. You are solely responsible for keeping passwords andother account identifiers safe and secure and you are entirely responsible for all activities thatoccur under your password or account. You must notify us of any unauthorized use of yourpassword or account.</p>
          <p><strong>USER SUBMISSIONS</strong></p>
          <p>Anything that you submit to the Site and/or provide to us, including but not limited to,questions, reviews, comments, and suggestions (collectively, "Submissions") will become oursole and exclusive property and you grant us the right to use your name in connection withsuch Submissions. We may, but shall not be obligated to, remove or edit any submissions.</p>
          <p><strong>INTELLECTUAL PROPERTY</strong></p>
          <p><strong>&ldquo;MIKYAJY&rdquo;</strong>&nbsp;is our registered trade mark. We are the owner or licensee of all registered andunregistered intellectual property rights in the Site and all content published on the Site(&ldquo;Content&rdquo;), the Site design, including, but not limited to, text, graphics, software, photos,video, music, sound, and their selection and arrangement, and all software compilations,underlying source code and software. You may download and print off one copy of extracts ofour site for personal use. You may not use of our intellectual property for any other purpose.</p>
          <p><strong>NO RELIANCE ON INFORMATION</strong></p>
          <p>The content is provided for information purposes only. Although we make a reasonable effortto ensure that the content is accurate and up to date, we make no representation and provideno warranty to this effect.</p>
          <p><strong>LIMITATION OF LIABILITY</strong></p>
          <p>To the extent permitted by law, we exclude all conditions, warranties, representations or otherterms which may apply to the Site or the Content, whether express or implied. We will not beliable to you for any loss or damage (including indirect and consequential damage) suffered byyou arising out of your use of this Site including but not limited to that arising out of or inrelation to you use of or inability to use the Site, any reliance on any Content, any virus ortechnologically harmful material that may infect your computer equipment by your use of theSite and any use of any website linked to this Site and any use of your password or account(whether authorized or not).</p>
          <p><strong>APPLICABLE LAW</strong></p>
          <p>These Terms of Use shall be interpreted and governed by the laws of the United Arab Emiratesas applicable in the Emirate of Dubai.</p>
          <p><strong>DISPUTES</strong></p>
          <p>Any controversy, claim or dispute arising out of or relating to these Terms of Use will bereferred to and finally settled by private and confidential binding arbitration before a singlearbitrator held in Dubai, UAE in English and governed by Dubai law pursuant to the Rules ofCommercial Conciliation and Arbitration of 1994 (Dubai), as amended, replaced or re-enactedfrom time to time. The arbitrator shall be a person who is legally trained and who hasexperience in the information technology field in Dubai and is independent of either party.Notwithstanding the foregoing, we reserve the right to pursue the protection of our rights withrespect to intellectual property rights and confidential information through the courts. For thispurpose, you agree to submit to the jurisdiction of the courts of Dubai.</p>
          <p><strong>TERMS AND CONDITIONS OF SALE</strong></p>
          <p><strong>1.APPLICATION</strong></p>
          <p>The products listed on this Site (&ldquo;Products&rdquo;) are offered and sold to you pursuant to theseterms and conditions of sale, as amended from time to time (&ldquo;Terms of Sale&rdquo;). We may amendthese Terms of Sale at any time and the version in force at the time that you make an order forProducts (&ldquo;Order) will be the terms that apply to the contract between us for such Order. Otherterms and conditions that may apply to you are contained in our Terms of Use and our PrivacyPolicy.</p>
          <p><strong>2.AGE RESTRICTIONS</strong></p>
          <p>You may not make an Order or purchase any Product unless you are at least 18 years of age.</p>
          <p><strong>3.PRODUCTS</strong></p>
          <p>The images of the Products are for illustrative purposes only. Although we make reasonableefforts to display the colours and other aspects of our Products accurately, there may be slightvariations.</p>
          <p><strong>4.ORDERS</strong></p>
          <p>After you place an Order, we will send you an email confirming receipt. However, acceptance ofyour Order does not occur until you receive an email from us informing you that your Order hasbeen dispatched. We cannot guarantee that all Products will always be available for purchase. Ifwe are unable to fulfil an Order, we will inform you by email and, if you have paid for the Order,refund the amount paid.</p>
          <p><strong>5.PRODUCT PRICES</strong></p>
          <p>The price of a Product will be as quoted on our Site at the time you submit your Order. Theprice of a Product does not include the delivery charge. Although we take all reasonable care toensure that our Products are correctly priced, there may be circumstances where the price isincorrect. If we discover an error, we may, at our discretion, either cancel the Order or contactyou to give you the option to purchase the Product at the correct price or cancel the Order.</p>
          <p><strong>6.PAYMENT</strong></p>
          <p>We accept online payment made by Visa and Mastercard debit/credit card. Your paymentdetails will be provided directly to our payment provider via a secure connection. You mustretain a copy of your transaction records and our Terms of Sale, Terms of Use and PrivacyPolicy.</p>
          <p>Payment may be made in these currencies.</p>
          <ul>
          <li>SAR- Saudi Riyal</li>
          <li>AED- UAE Dirham</li>
          <li>USD- US Dollars</li>
          </ul>
          <p>Any dispute or claim arising out of or in connection with this website shall be governed andconstrued in accordance with the laws of UAE.</p>
          <p>If you make a payment for our products or services on our website, the details you are asked tosubmit will be provided directly to our payment provider via a secured connection.&nbsp;</p>
          <p>The cardholder must retain a copy of transaction records and Merchant policies and rules.</p>
          <p><strong>7.DELIVERY</strong></p>
          <p>We use Aramex to deliver Mikyajy.com Orders. Delivery times and other conditions can beviewed&nbsp;<a href="https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/errorPages/500.html?reference=5829161da3724e778b2bab4187e74b57">here</a>&nbsp;. We do not sell or deliver to any countries if prohibited by UAE law or OFACsanctions. Please check the&nbsp;<a href="https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/errorPages/500.html?reference=962c1d3992f847c8b89b84f3d040d7da">list of countries</a>&nbsp;to which we do not deliver. Your Order may incurcustoms duties and taxes at its destination. We have no control over these charges and cannotpredict their amount - please contact Aramex or your local customs office for furtherinformation or click&nbsp;<a href="https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/errorPages/500.html?reference=962c1d3992f847c8b89b84f3d040d7da">here</a>&nbsp;to view.</p>
          <p>A single order may be split into multiple shipments, depending on the availability of the itemand/or weight limits for parcels. You should be aware of the possibility that multiple shipmentsmay result in multiple postings to your monthly credit card or debit card statement.</p>
          <p><strong>8.RETURNS</strong></p>
          <p>Mikyajy.com are proud to offer convenient and generous returns and exchange policies to ourcustomers.</p>
          <p>Considering the intimate nature of our products, and all required Health and Safety laws,Mikyajy.com will gladly accept the exchange or return of an item, provided that it meets with allof the following conditions:</p>
          <ul>
          <li>Exchange / refund is carried out within 7 days of purchase</li>
          <li>The product is not opened and is kept intact in its original packaging</li>
          <li>The customer has provided an original receipt and order reference number</li>
          </ul>
          <p>Please note that all sale and promotional items cannot be refunded or exchanged online and instore.Refunds will be made by the original mode of payment. We do not refund deliverycharges except where the Product is defective or is not the Product you ordered.</p>
          <p>You may return the Product at any one of&nbsp;our stores&nbsp;in the GCC, or you can contact ourcustomer service team by phone or&nbsp;email&nbsp;to arrange for a return by post or courier.</p>
          <p>The cardholder must retain a copy of transaction records and Merchant policies and rules.</p>
          <p><strong>9.GOVERNING LAW</strong></p>
          <p>These Terms of Sale are governed by the law of the United Arab Emirates as applicable withinthe Emirate of Dubai. You agree to submit to the exclusive jurisdiction of the courts of Dubai inthe event of a dispute.</p>
          <p><strong>10.FAQ</strong></p>
          <p>Please click&nbsp;here&nbsp;to see our FAQ.</p>
          <p><strong>11.CONTACT DETAILS</strong></p>
          <p>Postal address: PO Box 27844, Dubai &ndash; UAE</p>
          <p>Physical address: 3rd Floor, Unit 301, Oud Metha Road, Dubai - UAE</p>`,
        template: "Terms & Conditions",
        name: "Terms & Conditions",
        title: "Terms & Conditions",
        summary: "",
        url: "/:store/terms-conditions",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "About Us",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p>Welcome to the colorful world of Mikyajy! Since its inception 20 years ago as a pioneer in Khaleeji color cosmetics and fragrance, Mikyajy has grown into a closely-knit family of xx loyal fans! Mikyajy is the brainchild of Mr. Kamal Osman Jamjoom, who is originally from Saudi Arabia and perfectly understands the cultural nuances and needs of the region. He has spearheaded the KOJ Group for decades and nurtured it to its current success.&nbsp;</p>
        <p>&nbsp;</p>
        <p>Mr. Kamal&rsquo;s inspiration behind Mikyajy were the women and the girls in his family. He noticed a gap when he found his female relatives chat about their makeup on several occasions. Sometimes it was about the lack of choice of colors and payoff, other times it was about the staying power, and in general it was about their makeup not being fun. Mr. Kamal set his mind to this idea and merged this gap with Mikyajy. The name Mikyajy means &ldquo;My Makeup&rdquo; in Arabic, which comes from the fact that makeup is a personal experience for every girl. And we at Mikyajy strive every single day to make it as fun, playful, quirky and vibrant as our gorgeous patrons deserve! We truly believe that All Girls Are Beautiful, and we love to empower them to take on the world with confidence!</p>
        <p>&nbsp;</p>
        <p>We have an experienced and passionate team of people in Product Research, Product Development &amp; Quality who are there to ensure you&rsquo;re getting the best of color cosmetics (eyes, lips, nails, and face), fragrances, gifting (all-in-one makeup boxes) and exciting seasonal Limited Edition collections.&nbsp; We bring you the best of international trends without forgetting your personal tastes and preferences.&nbsp; So you get exactly what you need, with the quality guaranteed by the state-of-art European manufacturing facilities!</p>
        <p>&nbsp;</p>
        <p>Whether you&rsquo;re a beginner and find makeup a bit intimidating, or you love to experiment and quirk it up with your looks, or you&rsquo;re a pro and know exactly what looks good on you, Mikyajy is your go-to destination! We are your partners in beauty and will help you make choices you won&rsquo;t regret!&nbsp; Find every shade, every finish, every on-trend fragrance in our dazzling outlets spread across Saudi Arabia, United Arab Emirates, Oman, Qatar, Bahrain, and Kuwait!&nbsp; And all the fun is yours for the taking on Mikyajy&rsquo;s online store!&nbsp; We can&rsquo;t wait to cater to your beauty needs with passion and love!</p>`,
        template: "AboutUs",
        name: "About Us",
        title: "About Us",
        summary: "",
        url: "/:store/about-us",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Contact Us",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><span>Feel free to contact us via phone, email or drop us a message on our Facebook or Instagram Page. </span></p>
        <p><strong><span>Details</span></strong><span>:</span></p>
        <p><strong><span>Office Address</span></strong><span>: Sultan Business Center, 301, 3<sup>rd</sup> Floor, Oud Metha, Dubai, UAE</span></p>
        <ol>
        <li><strong><span> O. Box</span></strong><span>: 27844</span></li>
        </ol>
        <p><strong><span>Landline Contact Number</span></strong><span>: Tel: +971 4 33 55 232 Ext: 1577</span></p>
        <p><strong><span>Email Address</span></strong><span>: <a href="mailto:help@mikyajy.com">help@mikyajy.com</a> </span></p>`,
        template: "Contact",
        name: "Contact Us",
        title: "Contact Us",
        summary: "",
        url: "/:store/contact-us",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Delivery Policy",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><span>Mikyajy.com is proud to partner with Aramex to deliver all online orders. </span></p>
        <p><span>Mikyajy.com does not sell to, nor will Aramex deliver to, any country, if doing so is prohibited by UAE law or OFAC sanctions. Please check the&nbsp;</span><span><a href="http://www.aramex.com/news/item.aspx?id=3aabe6cf-5e69-46a0-b910-4cd27e4b1509">list of countries</a></span><span>&nbsp;to which Aramex do not deliver.</span></p>
        <p><u><span>Mikyajy.com </span></u><span>will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of UAE.</span></p>
        <p><span>Multiple <u>shipments/delivery</u> may result in multiple postings to the cardholder&rsquo;s monthly statement.</span></p>
        <p><span>Please find below our delivery charges: </span></p>
        <p><span>Standard delivery charge across UAE: AED 20</span></p>
        <p><span>Cash on delivery across UAE: FREE</span></p>
        <p><span>Standard delivery charges for KSA: SAR 25</span></p>
        <p><span>Cash on delivery across KSA: SAR 24</span></p>
        <p><span>FREE delivery for order above SAR 199/AED 199</span></p>
        <p><span>Please note that your order may incur customs duties and taxes at its destination. Mikyajy.com has no control or influence over these charges and cannot predict their amount. Please contact Aramex or your local customs office for further information or click&nbsp;</span><span><a href="http://www.aramex.com/customs/default.aspx">here</a></span><span>&nbsp;to view further details.</span></p>
        <p><span>A single order may be split into multiple shipments, depending on the availability of the item and/or weight limits for parcels imposed by Aramex. You should be aware of the possibility that multiple shipments may result in multiple postings to your monthly credit card or debit card statement.</span></p>`,
        template: "Delivery Policy",
        name: "Delivery Policy",
        title: "Delivery Policy",
        summary: "",
        url: "/:store/delivery-policy",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Frequently Asked Questions",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><u><span>Account related:</span></u></p>
        <ol>
        <li><span>Do I have to create an account to shop online?</span></li>
        </ol>
        <p><span>No, you can shop as a guest as well. But if you do create an account to shop, you will be kept up-to-date with the latest offers, discounts and exciting events that we will have for you! </span></p>
        <ol start="2">
        <li><span>What should I do if I have problems logging into my account?</span></li>
        </ol>
        <p><span>Please make sure you are logging in using the email address and password you used for signing up. </span></p>
        <p><span>If you have forgotten your account password, click on &ldquo;Forgot my password&rdquo; and follow the steps to access your account again.</span></p>
        <p><span>Get in touch with us</span><span> if you are unable to resolve this issue.</span></p>
        <p><u><span>General </span></u></p>
        <ol>
        <li><span>What is Mikyajy? </span></li>
        </ol>
        <p><span>Mikyajy is an Arabian homegrown brand for makeup and fragrances.</span> <span>We bring you the best of international trends balanced with regional tastes and preferences. <span style="color: blue;">Know more! </span></span></p>
        <p><span>&nbsp;</span></p>
        <ol start="2">
        <li><span>Where are the products made? </span></li>
        </ol>
        <p><span>Our products are manufactured in the state-of-the-art facilities of Europe!</span></p>
        <p><u><span>Refunds and exchange</span></u></p>
        <ol>
        <li><span>What is the refund policy?</span></li>
        </ol>
        <p><span>At Mikyajy, your satisfaction is our priority, which is why we offer you the choice to exchange or refund your purchase. Check out our <span style="color: blue;">Return and Exchange policy</span> here. </span></p>
        <p><span>&nbsp;</span></p>
        <ol start="2">
        <li><span>I requested for a refund but have not heard back from the customer service team. What should I do? </span></li>
        </ol>
        <p><span>Drop us a message &nbsp;</span></p>
        <p><span>Call us directly on xxxx</span></p>
        <p><span>Email us on <a href="mailto:mikyajy@kojamjoom.com">mikyajy@kojamjoom.com</a></span></p>
        <p><span>&nbsp;</span></p>
        <ol start="3">
        <li><span>How long does the refund/exchange take? </span></li>
        <li style="margin-left: 54.0pt; "><span>Within UAE: 3 to 4 working days </span></li>
        <li style="margin-left: 54.0pt; "><span>For KSA: 5 to 7 working days </span></li>
        <li style="margin-left: 54.0pt; "><span>For Kuwait, Oman, Bahrain, Qatar and International orders: 7 working days</span></li>
        </ol>
        <p style="margin-left: 54.0pt;"><span>&nbsp;</span></p>
        <p><u><span style="font-size: 12.0pt; line-height: 107%; ">&nbsp;</span></u></p>
        <p><u><span><span style="text-decoration: none;">&nbsp;</span></span></u></p>
        <p><u><span>Orders and Delivery</span></u></p>
        <ol>
        <li><span>How can I place an order? </span></li>
        </ol>
        <p><span>It is super easy! </span></p>
        <ul>
        <li><span>Browse through our products and click on the ones you intend to purchase.</span></li>
        <li><span>Click on &ldquo;Add to Bag&rdquo; to add products to your shopping bag.</span></li>
        <li><span>To review the products you have chosen, click on the small bag icon in the top right corner.</span></li>
        <li><span>If you have a discount/offer code, enter it in the field and click &ldquo;Apply&rdquo;. The total price of your shopping bag will be updated and displayed accordingly.</span></li>
        <li><span>You can then sign up or sign in with us for information on the latest launches and offers! This step is optional.</span></li>
        <li><span>Review your shopping bag and proceed to checkout when you are ready.</span></li>
        <li><span>Fill in all the required details for shipping and click on &ldquo;Save and Continue&rdquo;. </span></li>
        <li><span>Review all your order details and shopping total once again before completing the payment.</span></li>
        </ul>
        <p><span>And VOILA! Your order is placed! You will immediately see your order confirmation with your order number. Use this order number for further correspondence on the status of your order. You will also receive an email with your order details including your order number, a summary of products ordered with prices, applied promotional codes, your ship-to and bill-to information, and the shipping method.</span></p>
        <p><span>&nbsp;</span></p>
        <ol start="2">
        <li><span>How can I cancel my order? </span></li>
        </ol>
        <p><span>Call our Customer Care number (xxxx) and provide the details of your order (order number and ARAMEX AWB number). We will do the rest.</span></p>
        <p><span>&nbsp;</span></p>
        <ol start="3">
        <li><span>Can I deliver to a different address other than my billing address? </span></li>
        </ol>
        <p><span>Yes of course! You will be asked to enter the Shipping Address separately from your Billing Address. </span></p>
        <ol start="4">
        <li><span>What are the delivery charges for GCC and International shipping? </span></li>
        </ol>
        <ul>
        <li><span>Standard delivery charges across UAE: AED 25</span></li>
        <li><span>Cash-on-delivery charges across UAE: FREE</span></li>
        <li><span>Standard delivery charges for KSA: SAR 25</span></li>
        <li><span>Cash-on-delivery charges across KSA: SAR 24</span></li>
        <li><span>Cash-on-delivery option is not applicable for International orders</span></li>
        <li><span>FREE delivery for orders above SAR/AED 199</span></li>
        <li><span>Please note that your order may incur customs duties and taxes at its destination.</span></li>
        </ul>
        <ol start="5">
        <li><span>How can I track my order? </span></li>
        </ol>
        <p><span>Track your order using the ARAMEX AWB number on the <span style="color: blue;">ARAMEX Order Tracking website.</span></span></p>
        <p><span>&nbsp;</span></p>
        <ol start="6">
        <li><span>How can I contact Customer Care? </span></li>
        </ol>
        <p><span>We&rsquo;re just one click away from you!</span></p>
        <p><span>Drop us a message&nbsp; </span></p>
        <p><span>Call us directly on xxxx</span></p>
        <p><span>Email us on <a href="mailto:mikyajy@kojamjoom.com">mikyajy@kojamjoom.com</a></span></p>
        <p><span>DM us on our Facebook or Instagram account.</span></p>
        <p><span>&nbsp;</span></p>
        <ol start="7">
        <li><span>How much time does it take for local/international deliveries? </span>
        <ol>
        <li><span>Within KSA and UAE: 2 to 3 working days </span></li>
        <li><span>For Kuwait, Oman, Bahrain, Qatar and International orders: 5 to 7 working days</span></li>
        </ol>
        </li>
        </ol>
        <p><span>&nbsp;</span></p>
        <ol start="8">
        <li><span>How to apply a Promo Code? </span></li>
        </ol>
        <ul>
        <li><span>Once you have selected the products you want to shop for and added them to your shopping bag, click on the small bag icon in the top right corner for checkout.</span></li>
        <li><span>Enter the promotional code in the given field and click &ldquo;Apply&rdquo;. The total price of your shopping bag will be updated and displayed accordingly.</span></li>
        <li><span>You can then proceed to add your shipping details and make the payment.</span></li>
        <li><span>Please note: Some promotional codes cannot be used multiple times. </span></li>
        </ul>
        <p>&nbsp;</p>`,
        template: "Frequently Asked Questions",
        name: "Frequently Asked Questions",
        title: "Frequently Asked Questions",
        summary: "",
        url: "/:store/faq",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Payment Methods",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><span>Mikyajy.com brings various modes of payment gateways so that you can shop with ease.</span></p>
        <p><span>Our payment methods include Credit or Debit Card payments made with a Visa and Mastercard. </span></p>
        <p><span>Your payment details will be provided directly to our payment provider via a secure connection. To learn more about our payment methods, please read our Terms &amp; Conditions. </span></p>
        <p><span>Payment in the following currencies are welcomed:</span></p>
        <ul style="margin-top: 0cm;">
        <li><span>SAR- Saudi Riyal</span></li>
        <li><span>AED- UAE Dirham</span></li>
        <li><span>USD- US Dollars</span></li>
        </ul>
        <p><span>In addition to card payment, we also offer our customers a Cash on Delivery payment option. This allows you to settle the invoices once the items are delivered to your home.</span></p>
        <p><span>Please note there may be a surcharge applicable when this delivery option is selected. This surcharge, if applicable, will be clearly detailed in your Order Confirmation. </span></p>`,
        template: "Payment Methods",
        name: "Payment Methods",
        title: "Payment Methods",
        summary: "",
        url: "/:store/payment-methods",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Returns & Exchange",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><span>At Mikyajy, your satisfaction is our priority, which is why we offer you the choice to exchange or refund your purchase as per the following guidelines:</span></p>
        <ul>
        <li><span>Exchange / refund is allowed within 7 days of purchase</span></li>
        <li><span>Exchange / refund of the product can be claimed online or at any Mikyajy store. To find the store closest to you please head to our Store Locator. </span></li>
        <li><span>For online refunds, please make sure you&rsquo;ve your invoice and order reference number. For store refunds, please keep make sure you present the original sales receipt.</span></li>
        <li><span>Products that need to be exchanged or refunded need to be unopened and in their original packaging. </span></li>
        <li><span>Please note that all sale and promotional items cannot be refunded or exchanged online and in store. </span></li>
        <li><span>Please note that all refunds will be done only through the Original Mode of Payment. </span></li>
        </ul>
        <p><span>For more assistance on your refunds and exchange head to our FAQs or Contact Us for further clarification. </span></p>`,
        template: "Returns & Exchange",
        name: "Returns & Exchange",
        title: "Returns & Exchange",
        summary: "",
        url: "/:store/returns-exchange",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Home",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html:
          "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque omnis dicta soluta cum similique modi doloribus at.</p>",
        template: "Home",
        name: "Home",
        title: "Home",
        summary: "",
        url: "/:store",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Catalogue",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Catalogue",
        name: "catalogue",
        title: "Catalogue",
        summary: "",
        url: "/:store/shop",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Notify Me",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Notify Me",
        name: "notifyMe",
        title: "Notify Me",
        summary: "",
        url: "/:store/shop/notify-me",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Category",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Category",
        name: "category",
        title: "Category",
        summary: "",
        url: "/:store/shop/:category",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Category",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Category",
        name: "category",
        title: "Category",
        summary: "",
        url: "/:store/shop/:category/:subCategory",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Category",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Category",
        name: "category",
        title: "Category",
        summary: "",
        url: "/:store/shop/:category/:subCategory/:subSubCategory",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Product",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "Product",
        name: "product",
        title: "Product",
        summary: "",
        url:
          "/:store/shop/:parentParentCategory/:parentCategory/:category/:product",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Payment",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: "",
        template: "Payment",
        name: "payment",
        title: "Payment",
        summary: "",
        url: "/:store/checkout/payment",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Payment Successful",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p>Your order has been placed successfully!</p>`,
        template: "PaymentSuccess",
        name: "paymentResponse",
        title: "Thank you for your order",
        summary: "",
        url: "/:store/checkout/payment-successful",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Payment Failed",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p>A problem has occurred on your order. Please try again. If this problem continues, please contact <strong>support@mikyajy.com</strong></p>`,
        template: "PaymentFailed",
        name: "paymentResponse",
        title: "Sorry, order failed",
        summary: "",
        url: "/:store/checkout/payment-failed",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Store Locator",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "StoreLocator",
        name: "storeLocator",
        title: "Store Locator",
        summary: "",
        url: "/:store/store-locator",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Login",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "Login",
        name: "login",
        title: "Login",
        summary: "",
        url: "/:store/login",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Register",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "Register",
        name: "register",
        title: "Register",
        summary: "",
        url: "/:store/register",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "My Profile",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "EditProfile",
        name: "editProfile",
        title: "My Profile",
        summary: "",
        url: "/:store/edit-profile",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Cart",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "Cart",
        name: "cart",
        title: "Cart",
        summary: "",
        url: "/:store/cart",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Checkout",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2019"
        },
        html: ``,
        template: "Checkout",
        name: "checkout",
        title: "Checkout",
        summary: "",
        url: "/:store/checkout",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Delivery",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Delivery",
        name: "delivery",
        title: "Delivery",
        summary: "",
        url: "/:store/checkout/delivery",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Shipment Address",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "ShipmentAddress",
        name: "shipmentAddress",
        title: "Shipment Address",
        summary: "",
        url: "/:store/shipment-address",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "My Orders",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "OrderHistory",
        name: "orderHistory",
        title: "My Orders",
        summary: "",
        url: "/:store/order-history",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "My Wishlist",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "Wishlist",
        name: "wishlist",
        title: "My Wishlist",
        summary: "",
        url: "/:store/wishlist",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "Quick Product",
          description: "",
          keywords: "",
          creator: "",
          date: "01/01/2018"
        },
        html: ``,
        template: "QuickProduct",
        name: "quickProduct",
        title: "Quick Product",
        summary: "",
        url: "/:store/shop/product/:productId",
        thumbnail: {},
        isHidden: false
      },
      {
        id: (this.id += 1),
        meta: {
          title: "الشروط والأحكام",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        html: `<p><span style="font-family: 'Arial',sans-serif;">الشروط والأحكام</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">استخدام الموقع</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك فقط استخدام هذا الموقع:</span></p>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> إذا كان عمرك لا يقل عن 18 عامًا أو كنت تستخدم الموقع تحت إشراف والديك أو الوصي القانوني ؛ و</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> نيابة عنك وليس لأي أغراض تجارية ما لم نسمح بذلك بشكل صريح وخطياً.</span></li>
      </ul>
      <p>&nbsp;</p>ÏÏ
      <p><span style="font-family: 'Arial',sans-serif;">يجب أن تكون أي معلومات تقدمها لنا أو ترسلها إلى الموقع سواء لغرض التسجيل أو الاشتراك أو ما إلى ذلك دقيقة وحديثة. يجب تحديث هذه المعلومات على الفور إذا طرأ عليها أي تغييرات. أنت وحدك المسؤول عن الحفاظ على أمان/ خصوصية كلمات المرور وغيرها من معرّفات الحساب ، كما أنك مسؤول تمامًا عن جميع الأنشطة التي تحدث بعد إدخال كلمة المرور أو على الحساب. يجب عليك إخطارنا بأي استخدام غير مصرح به لكلمة المرور أو الحساب الخاص بك.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">النصوص المرسلة/ المقدمة من قبل المستخدم</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">سيكون أي شيء ترسله إلى الموقع و / أو تقدمه لنا ، بما في ذلك على سبيل المثال لا الحصر ، الأسئلة والتعليقات والآراء والاقتراحات (والتي يطلق عليها جمعاً "النصوص المقدمة") ملكنا الوحيد والحصري حيث تمنحنا الحق في استخدام اسمك فيما يتعلق بمثل هذه الطلبات. يجوز لنا ولكن لن نكون ملزمين&nbsp; بإزالة أو تعديل أي من النصوص المقدمة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الملكية الفكرية</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">"مكياجي" هي علامة تجارية مسجلة لدينا. نحن المالك أو المرخص له لجميع حقوق الملكية الفكرية المسجلة وغير المسجلة في الموقع وجميع المحتويات المنشورة على الموقع ("المحتوى")&nbsp; وتصميم الموقع ، بما في ذلك ، على سبيل المثال لا الحصر ، النصوص والرسومات والبرامج والصور والفيديو والموسيقى والصوت بالإضافة إلى اختيارهم وترتيبهم، وجميع البرامج بما فيها رمز المصدر والبرمجيات. حيث يمكنك تنزيل وطباعة نسخة واحدة من أي المستخرجات الموجودة في موقعنا للاستخدام الشخصي فقط. لا يجوز لك استخدام ملكيتنا الفكرية لأي غرض آخر.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لا اعتماد على المعلومات</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم توفير المحتوى لأغراض تتعلق بتقديم المعلومات فقط. على الرغم من أننا نبذل جهدًا معقولًا لضمان دقة المحتوى وتحديثه، إلا أننا لا نقدم أي إقرار ولا ضمان بهذا الخصوص.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">تحديد المسؤولية</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">إلى الحد المسموح به قانونياً، فإننا نستبعد جميع الشروط أو الضمانات أو الإقرارات أو الشروط الأخرى التي قد تنطبق على الموقع أو المحتوى، سواء كانت صريحة أو ضمنية. لن نكون مسؤولين تجاهك عن أي خسارة أو ضرر (بما في ذلك الضرر غير المباشر والتبعي) الذي تتعرض له نتيجة استخدامك لهذا الموقع بما في ذلك على سبيل المثال لا الحصر ، ما ينشأ عن أو فيما يتعلق باستخدامك أو القصور والعجز عن استخدام الموقع بالشكل الصحيح، الاعتماد على أي محتوى أو أي فيروس أو مواد ضارة تقنيًا قد تصيب أجهزة الكمبيوتر الخاصة بك خلال استخدامك للموقع أوأي موقع مرتبط بهذا الموقع وأي استخدام لكلمة المرور أو الحساب الخاص بك (سواء كان مصرحًا به أم لا).</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">القانون المعمول به </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">إن بنود شروط الاستخدام خاضعة ويتم تفسيرها وفقاً للقوانين النافذة والمطبقة بدولة الامارات العربية المتحدة ووفقاً لما هو معمول به في إمارة دبي</span>.</p>
      <p><span style="font-family: 'Arial',sans-serif;">المنازعات</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">ستتم الإشارة إلى أي خلاف أو مطالبة أو نزاع ينشأ عن أو فيما يتعلق بشروط الاستخدام هذه ويتم تسويتها بشكل نهائي عن طريق تحكيم ملزم خاص وسري أمام مُحكّم واحد حيث ستُقام في دبي بالإمارات العربية المتحدة باللغة الإنجليزية ويحكمه قانون دبي وفقًا لقواعد المصالحة التجارية والتحكيم لعام 1994 (دبي) ، بصيغته المعدلة ، أو المستبدلة أو التي تم إعادة سنها من وقت لآخر. يجب أن يكون المحكم شخصًا مدربًا قانونيًا وله خبرة في مجال تكنولوجيا المعلومات في دبي ومستقل عن أي من الطرفين. على الرغم مما تقدم ، فإننا نحتفظ بالحق في متابعة حماية حقوقنا فيما يتعلق بحقوق الملكية الفكرية والمعلومات السرية من خلال المحاكم. لهذا الغرض ، فإنك توافق على الخضوع للولاية القضائية لمحاكم دبي.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">شروط وأحكام البيع </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">التطبيق</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم تقديم المنتجات الموجودة في هذا الموقع ("المنتجات") وبيعها لكم بالتوافق مع شروط وأحكام البيع هذه وكما يتم تعديلها من وقت لآخر ( أحكام البيع ").&nbsp; قد نقوم بتعديل أحكام البيع في اي وقت وستكون النسخة السارية المفعول في الوقت الذي تجري فيه أي طلبية منتجات ("طلبية") هي نفسها الأحكام التي تنطبق على العقد بيننا الذي يحكم هذه الطلبية.&nbsp; تم تضمين شروط وأحكام أخرى قد تنطبق عليك في شروط الاستخدام وسياسة الخصوصية الخاصة بنا.</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">القيود المتعلقة بالعمر</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لن تتمكنوا من إجراء أي طلبية للمنتجات إذا لم يكن العمر 18 عاماً على الأقل.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">&nbsp;</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">المنتجات </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">توجد صور المنتجات لأغراض توضيحية فقط. على الرغم من أننا نبذل جهوداً معقولة لعرض الألوان وخصائص منتجاتنا بشكل دقيق إلا أنه قد تكون هناك اختلافات طفيفة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الطلبيات </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">بعد قيامكم بطلبية ما، سيتم إرسال بريد إلكتروني لتأكيد استلام العملية من قبلنا. إلا أنه لن يكون هناك قبول كامل للطلبية إلا بعد استلامكم بريد يفيد بأننا قمنا بإرسال الطلبية. لا يمكننا ضمان أن جميع المنتجات ستكون متاحة دائمًا للشراء. في حال لم نتمكن من إتمام الطلبية، سوف نعلمكم بالبريد الإلكتروني وفي حال تم الدفع، فسنقوم برد المبلغ المدفوع.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">&nbsp;</span></p>
      <ol start="5">
      <li><span style="font-family: 'Arial',sans-serif;"> أسعار المنتجات</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">سيتم تحديد سعر منتج ما على موقعنا في وقت القيام بالطلبية. سعر المنتج لا يشمل رسوم التوصيل. على الرغم من أننا نحرص تمامًا على ضمان تسعير منتجاتنا بشكل صحيح، فقد تكون هناك ظروف يكون فيها السعر غير صحيح. إذا اكتشفنا اي خطأ بالأسعار، فقد نقوم&nbsp; حسب تقديرنا&nbsp; إما بإلغاء طلبية الشراء أو الاتصال بكم لإعطاء خيار إما شراء المنتج بالسعر الصحيح أو إلغاء الطلبية.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الدفع</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم قبول الدفع ببطاقة الائتمان أو بطاقة السحب الآلي من خلال شبكتي فيزا وماستر كارد.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">سيتم تقديم تفاصيل الدفع الخاصة بكم مباشرة إلى مزود الدفع لدينا عن طريق اتصال آمن. عليكم الاحتفاظ بنسخة من سجلات الحركة الشرائية مع أحكام البيع وأحكام أو شروط الاستخدام وسياسة الخصوصية.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم قبول الدفع بالعملات التالية</span>:</p>
      <p><span style="font-family: 'Arial',sans-serif;">الريال السعودي</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">درهم الامارات</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الدولار الأمريكي</span></p>
      <p>&nbsp;</p>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> أي نزاع أو مطالبة تنشأ عن أو فيما يتعلق بهذا الموقع يجب أن تخضع وتفسر وفقًا لقوانين دولة الإمارات العربية المتحدة.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> إذا قمت بالدفع مقابل منتجاتنا أو خدماتنا على موقعنا ، فسيتم تقديم التفاصيل التي يُطلب منك تقديمها مباشرة إلى مزود الدفع الخاص بنا عبر اتصال آمن.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> يجب أن يحتفظ حامل البطاقة بنسخة من سجلات المعاملات الشرائية والسياسات والقواعد الخاصة بجهة البيع.</span></li>
      </ul>
      <p>&nbsp;</p>
      <ol start="7">
      <li><span style="font-family: 'Arial',sans-serif;"> التوصيل </span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">نحن نستعين بارامكس لتسليم طلبيات الشراء من خلال </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;">. يمكن الاطلاع على مواعيد التسليم والشروط الأخرى هنا. نحن لا نبيع أونوصل الطلبيات إلى أي دولة إذا كانت محظورة بموجب القانون الإماراتي أو عقوبات أوفاك. يرجى التحقق من قائمة البلدان التي لا نقوم بتسليمها. قد تتكبد الطلبية رسوم جمركية وضرائب في وجهة الوصول. لا يمكننا التحكم بهذه الرسوم ولا يمكننا التنبؤ بمبلغها - يرجى الاتصال بارامكس أو مكتب الجمارك المحلي للحصول على مزيد من المعلومات أو انقر هنا للعرض.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكن تقسيم طلبية واحدة إلى شحنات متعددة، اعتمادًا على مدى توفر المنتج و / أو حدود وزن الطرود. يرجى العلم بأنه من الممكن أن يؤدي تعدد الشحنات إلى خصم المبلغ على شكل مبالغ جزئية تُسجل على كشف حساب بطاقة الائتمان أو بطاقة الخصم.</span></p>
      <ol start="8">
      <li><span style="font-family: 'Arial',sans-serif;"> الإرجاع :</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يفخر موقع </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> بتوفير سياسات إرجاع وتبديل مريحة وسخية لعملائه.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">بالنظر إلى الطبيعة الحساسة لمنتجاتنا، وجميع قوانين الصحة والسلامة المطلوبة ، سيقبل موقع</span> Mikyajy.com <span style="font-family: 'Arial',sans-serif;">بكل سرور تبديل أو إرجاع منتج ما ، بشرط أن يفي بجميع الشروط التالية</span>:</p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم الإبدال/الإرجاع في غضون 7 أيام من الشراء</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لم يتم فتح المنتج والمحافظة على حالته في عبوته الأصلية</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">أن يقدم العميل إيصالًا أصليا ً والرقم المرجعي للطلبية </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى ملاحظة أنه لا يمكن رد أو استبدال جميع منتجات التنزيلات والمشمولة بالعروض الترويجية عبر الإنترنت. سيتم استرداد المبالغ المدفوعة بواسطة طريقة الدفع الأصلية. لا نقوم برد رسوم التوصيل باستثناء الحالات التي يكون فيها المنتج معيبًا أو لا يكون هو نفسه المنتج الذي طلبته.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك إرجاع المنتج في أحد معارضنا في دول مجلس التعاون الخليجي ، أو يمكنك الاتصال بفريق خدمة العملاء لدينا بالهاتف أو عن طريق البريد الإلكتروني للترتيب لإعادة المنتج إما عن طريق البريد العادي أو شركة الشحن.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يجب على حامل البطاقة الاحتفاظ بنسخة من سجلات المعاملة الشرائية مع القواعد والسياسات الخاصة بالبائع.</span></p>
      <ol start="9">
      <li><span style="font-family: 'Arial',sans-serif;"> القانون المعمول به</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">تخضع أحكام البيع هذه لقانون الإمارات العربية المتحدة المطبق في إمارة دبي. أنت توافق على الخضوع للولاية القضائية الحصرية لمحاكم دبي في حالة حدوث نزاع.</span></p>
      <ol start="10">
      <li><span style="font-family: 'Arial',sans-serif;"> الأسئلة الشائعة أو المتكررة</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى الضغط هنا للإطلاع على الأسئلة المتكررة.</span></p>
      <ol start="11">
      <li><span style="font-family: 'Arial',sans-serif;"> تفاصيل الاتصال</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">العنوان البريدي: صندوق بريد 27844 دبي، الإمارات العربية المتحدة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">العنوان الفعلي: الطابق الثالث، رقم المكتب 301، شارع عود ميثاء، دبي ، الإمارات العربية المتحدة.</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">قد يتم تغيير سياسات وأحكام موقع الويب أو تحديثه من حين لآخر للوفاء بالمتطلبات والمعايير. لذلك ، يتم تشجيع العملاء على زيارة هذه الأقسام بشكل متكرر حتى يطلعوا على التغييرات التي تحدث على الموقع. ستكون التعديلات سارية المفعول في يوم نشرها.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى العلم أنه ستتم إعادة المبالغ المدفوعة بنفس طريقة الدفع الأصلية. </span></p>
      `,
        template: "Page",
        name: "Page",
        title: "الشروط والأحكام",
        summary: "",
        url: "/:store/terms-conditions-ar",
        isHidden: true
      },
      {
        id: (this.id += 1),
        meta: {
          title: "سياسة الاستبدال والإرجاع",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "سياسة الاستبدال والإرجاع",
        summary: "",
        url: "/:store/returns-exchange-ar",
        isHidden: true,
        html: `<p><span style="font-family: 'Arial',sans-serif;">سياسة الاستبدال والإرجاع</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لأن رضاءكم هو أولويتنا في مكياجي لذا نحرص على منحكم الخيار في إعادة أو استبدال مشترياتكم مع مراعاة الإرشادات التالية:</span></p>
      <p>&nbsp;<span style="font-family: 'Arial',sans-serif;">يُسمح استبدال أو إعادة المنتج في غضون 7 أيام من تاريخ الشراء. </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكن القيام بالاستبدال أو إعادة المنتج أونلاين أو في أي من محلات مكياجي. لمعرفة المحل الأقرب، يرجى الاستعانة برابط مواقع المحلات</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لاسترداد الأموال أونلاين، يجب التأكد من حيازة الفاتورة والرقم المرجعي للطلبية. أما في حال الرغبة باسترداد الأموال من أحد المحلات، يجب إحضار وصل الشراء الأصلي.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يجب أن تكون المنتجات المُراد استبدالها أو إعادتها غير مفتوحة وبغلافها الأصلي.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى العلم أنه لايمكن استبدال أو إعادة المنتجات المشمولة بالتخفيضات والعروض الترويجية عبر أي من منافذنا سواء أكانت أحد المحلات أو حتى أونلاين.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">&nbsp;</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لمزيد من المساعدة بشأن الاستبدال والإرجاع&nbsp; يرجى الذهاب إلى الأسئلة الشائعة أو الاتصال بنا للحصول على إيضاحات إضافية.</span></p>
      <p>&nbsp;</p>`
      },
      {
        id: (this.id += 1),
        meta: {
          title: "عندما نجمع معلوماتك الشخصية",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "عندما نجمع معلوماتك الشخصية",
        summary: "",
        url: "/:store/privacy-policy-ar",
        isHidden: true,
        html: `<ol>
      <li><span style="font-family: 'Arial',sans-serif;">عندما نجمع معلوماتك الشخصية</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك زيارة وتصفح الموقع دون الحاجة إلى تقديم أي معلومات شخصية. ومع ذلك ، ستحتاج إلى تقديم معلومات شخصية عند تسجيل حساب أو إجراء طلبية أو حتى تقديم أي طلب/ رسالة.</span></p>
      <ol>
      <li><span style="font-family: 'Arial',sans-serif;">المعلومات الشخصية التي نجمعها</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">ستتضمن المعلومات الشخصية التي نجمعها اللقب والاسم والجنس وعنوان البريد الإلكتروني والعنوان البريدي وعنوان التسليم (في حال كان مختلفاً) ورقم الهاتف ورقم الهاتف المحمول. قد نقوم أيضًا بجمع المعلومات الشخصية التي تقدمها معًا أو كجزء من أي طلب تقوم بتقديمه</span>.</p>
      <p><span style="font-family: 'Arial',sans-serif;">نحن لا نطلب أو نحتفظ بتفاصيل الدفع أو تفاصيل بطاقة الدفع أو تفاصيل الحساب المصرفي. يتم جمع هذه التفاصيل أثناء عملية الشراء الآمنة التي يسهلها مزود خدمة الدفع لدينا، والمعروف باسم </span>PayFort<span style="font-family: 'Arial',sans-serif;"> ، ولا يقوم الطرف السابق ذكره بإطلاعنا على هذه التفاصيل أبداً.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">3.معلومات أخرى نقوم بجمعها</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">كلما زرت الموقع ، سنقوم بجمع معلومات معينة</span> <span style="font-family: 'Arial',sans-serif;">مثل (وقت وتاريخ زيارتك للموقع، والصفحات التي تم عرضها، وعنوان</span> IP <span style="font-family: 'Arial',sans-serif;">والمتصفح المُستخدم للوصول إلى الموقع). نستخدم هذه المعلومات لفهم كيف تم استخدام موقعنا وتحسين أداء الموقع. تُعرض هذه المعلومات بكونها مجهولة المصدر ولا يمكن ربطها بك كفرد</span>.</p>
      <ol start="4">
      <li><span style="font-family: 'Arial',sans-serif;"> كيف نستخدم معلوماتك الشخصية</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">سنستخدم معلوماتك الشخصية للأغراض التالية:</span></p>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> إنشاء وإدارة حسابك ، تنفيذ وتسليم طلبياتك وتزويدك بالخدمات والمعلومات ؛</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> تحسين تصميم الموقع والمحتوى والوظائف ؛ و</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> إجراء بحث حول التركيبة السكانية وأذواق المستخدمين لدينا.</span></li>
      </ul>
      <p><span style="font-family: 'Arial',sans-serif;">قد نستخدم معلوماتك الشخصية لإرسال معلومات إليك حول منتجاتنا وخدماتنا وأخرى مرتبطة بشركات تابعة لنا. يمكنك اختيار إلغاء الاشتراك في أي وقت من خلال النقر على رابط "إلغاء الاشتراك" في أي بريد إلكتروني تسويقي نرسله إليك.</span></p>
      <ol start="5">
      <li><span style="font-family: 'Arial',sans-serif;">مشاركة معلوماتك الشخصية مع أطراف ثالثة</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">سنشارك معلوماتك الشخصية مع</span>:</p>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;">شركاؤنا في مجال الشحن ، لأغراض توصيل الطلبيات ؛</span></li>
      <li><span style="font-family: 'Arial',sans-serif;">الجهات الخارجية التي تقدم لنا الخدمات ، من أجل تزويدنا بتلك الخدمات (على سبيل المثال: التسويق وإدارة موقع الويب وخدمات الحماية من الاحتيال) ؛ و</span></li>
      <li><span style="font-family: 'Arial',sans-serif;">أي سلطة حكومية أو قانونية إذا اقتضى القانون</span></li>
      </ul>
      <p><span style="font-family: 'Arial',sans-serif;">لن يتم تخزين أو بيع أو مشاركة أو تأجير أي بيانات بطاقات الائتمان / الخصم ومعلومات التعريف الشخصية لأي أطراف ثالثة</span>.</p>
      <p><span style="font-family: 'Arial',sans-serif;">قد نقوم بنقل قواعد البيانات الخاصة بنا والتي تحتوي على معلوماتك الشخصية إذا قمنا ببيع أعمالنا أو جزء منها. ماعدا ماهو منصوص عليه في سياسة الخصوصية هذه ، سوف لن نبيع أو نكشف معلوماتك الشخصية إلى أطراف ثالثة دون الحصول على موافقتك المسبقة. قد يحتوي الموقع على روابط لمواقع أخرى أوهياكل ( تنقل محتوى من مواقع أخرى). يرجى العلم أننا لسنا مسؤولين عن ممارسات الخصوصية أو محتوى تلك المواقع الأخرى، ولا عن أي طرف ثالث ننقل إليه معلوماتك الشخصية وفقًا لسياسة الخصوصية الخاصة بنا</span>.</p>
      <ol start="6">
      <li><span style="font-family: 'Arial',sans-serif;"> استخدام مكونات إضافية خاصة بالمواقع الاجتماعية</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يستخدم الموقع أيقونات أو مكونات إضافية&nbsp; تابعة لمواقع التواصل الاجتماعي والتي يقدمها أطراف ثالثة بما في ذلك الفيسبوك والانستغرام و الواتساب والبنترست (</span>PI<span style="font-family: 'Arial',sans-serif;"> أو مزود مستقل)</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">عندما تزور صفحة تحتوي على مكون إضافي، ينشئ متصفحك اتصالًا مباشرًا بخوادم المزويدين المستقلين</span>PI <span style="font-family: 'Arial',sans-serif;">&nbsp;والذي قد يكون موجودًا في دول أخرى) ويتم نقل محتوى المكون الإضافي الخاص بك إلى متصفحك. بعد ذلك ، يستطيع موفر </span>PI<span style="font-family: 'Arial',sans-serif;"> ذي الصلة استلام معلومات حول دخولك إلى تلك الصفحة من الموقع. يحدث هذا حتى لو لم يكن لديك حساب لدى مزود الخدمة المستقل </span>PI<span style="font-family: 'Arial',sans-serif;"> أو لم تقم بتسجيل الدخول إليه في ذلك الوقت.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">في حال قمت بتسجيل الدخول إلى موقع الويب الخاص بالمزود المستقل </span>PI<span style="font-family: 'Arial',sans-serif;"> ، وكنت تتفاعل في المواقع التابعة لأحد المكونات الإضافية ذات الصلة على موقعنا (على سبيل المثال عن طريق النقر على "أعجبني" أو إدخال تعليق) ، يتم نقل المعلومات المقابلة من المستعرض الخاص بك مباشرة إلى خادم / المزود المستقل</span>PI <span style="font-family: 'Arial',sans-serif;">&nbsp;وتخزينها فيه. يمكن أيضًا نشر المعلومات على صفحة حسابك في </span>PI <span style="font-family: 'Arial',sans-serif;">/المزود المستقل وستكون مرئية لأولئك الذين منحتهم حق الوصول "كأصدقاء" أو غير ذلك.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك حظر المكونات الإضافية باستخدام الوظائف الإضافية لمتصفحك ، مثل "</span>Facebook Blocker<span style="font-family: 'Arial',sans-serif;">"/ "حاجب الفيسبوك".</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">للحصول على معلومات حول الغرض من جمع البيانات ونطاقها عن طريق فيسبوك وبنترست وإنستغرام وكيف تم معالجتها واستخدامها، فضلاً عن حقوقك في هذا الصدد وخيارات الإعدادات لحماية خصوصيتك، يرجى قراءة سياسة الخصوصية لـ </span>PI<span style="font-family: 'Arial',sans-serif;"> / المزود المستقل المتصل.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">المزود: فيسبوك</span> <span style="font-family: 'Arial',sans-serif;">، إنستغرام</span></p>
      <ol start="7">
      <li><span style="font-family: 'Arial',sans-serif;"> ملفات تعريف الارتباط</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">ليس من الضروري قبول ملفات تعريف الارتباط لزيارة موقعنا. ومع ذلك ، إذا كنت ترغب في إجراء طلبية أو إضافة عنصر إلى سلة التسوق الخاصة بك، فستحتاج إلى تعيين متصفحك لقبول ملفات تعريف الارتباط حتى تتمكن من استخدام الوظائف ذات الصلة. لا يتم استخدام ملفات تعريف الارتباط التي نستخدمها أبدًا لتخزين أي معلومات شخصية ولا يمكن تتبعها لمستخدم فردي. نستخدم المعلومات المجهولة الهوية التي تأتينا من ملفات تعريف الارتباط لفهم كيفية استخدام عملائنا لموقعنا، وتحسين الموقع، وتصميم إعلانات تناسب أذواقك ولتسهيل استخدام الموقع.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يستخدم هذا الموقع &nbsp;&nbsp;تحليلات غوغل \</span>Google Analytics<span style="font-family: 'Arial',sans-serif;"> الذي يستخدم ملفات تعريف الارتباط لمساعدتنا في تحليل كيفية استخدام موقعنا. سيتم نقل المعلومات التي تم إنشاؤها بواسطة ملف تعريف الارتباط حول استخدامك للموقع (بما في ذلك عنوان </span>IP<span style="font-family: 'Arial',sans-serif;"> الخاص بك) إلى جوجل وتخزينها على خوادم في الولايات المتحدة. ستستخدم جوجل هذه المعلومات لغرض تقييم استخدامك للموقع، وتجميع التقارير حول نشاط الموقع لمشغلي الموقع وتقديم خدمات أخرى تتعلق بنشاط موقع الويب واستخدام الإنترنت. قد تقوم جوجل أيضًا بنقل هذه المعلومات إلى جهات خارجية عند الضرورة للقيام بذلك بموجب القانون ، أو حيث تقوم هذه الأطراف الثالثة بمعالجة المعلومات نيابةً عن جوجل. لن تربط جوجل عنوان </span>IP<span style="font-family: 'Arial',sans-serif;"> الخاص بك مع أي بيانات أخرى تحتفظ بها جوجل.</span></p>
      <ol start="8">
      <li><span style="font-family: 'Arial',sans-serif;"> الأمان</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">لدينا تدابير تقنية وأمنية لمنع الوصول غير المصرح به إلى معلوماتك الشخصية التي يتم تخزينها من قِبلنا أو فقدانها أو إتلافها. نجمع معلوماتك الشخصية على خادم آمن، ونستخدم جدران الحماية/ الفايروول على خوادمنا. في ظل أنناأنناأننافي غير قادرين على ضمان الأمن بنسبة 100 ٪ ، إلا أن هذا يجعل من الصعب على القراصنة/ الهاكرزفك تشفير بياناتك. تعني إجراءات الأمان الخاصة بنا أننا قد نطلب إثبات الهوية من حين لآخر قبل أن نكشف لك المعلومات الشخصية. أنت مسؤول عن الحماية ضد الوصول غير المصرح به إلى كلمة المرور والحساب الخاصين بك واستخدامها.</span></p>
      <p>&nbsp;</p>
      <ol start="9">
      <li><span style="font-family: 'Arial',sans-serif;"> الموافقة</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">باستخدام موقعنا أو بإرسال معلومات شخصية إلى الموقع أو لنا أو إلى وكلائنا، فإنك توافق على استخدامنا لمعلوماتك الشخصية بالطريقة المنصوص عليها في سياسة الخصوصية هذه.</span></p>
      <ol start="10">
      <li><span style="font-family: 'Arial',sans-serif;"> الوصول والاتصال</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">قد يتم تغيير سياسات وأحكام موقع الويب أو تحديثه من حين لآخر للوفاء بالمتطلبات والمعايير المقبولة. لذلك</span> <span style="font-family: 'Arial',sans-serif;">يتم تشجيع العملاء على زيارة هذه الأقسام بشكل متكرر حتى يتم تحديثهم بشأن التغييرات التي تطرأ على الموقع. ستكون التعديلات سارية المفعول في يوم نشرها.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك طلب الوصول إلى معلوماتك الشخصية ، ويمكنك أن تطلب منا تصحيح أي معلومات غير دقيقة في تلك المعلومات الشخصية. كما &nbsp;لديك أيضًا الحق في أي مرحلة أن تطلب منا التوقف عن استخدام معلوماتك الشخصية لأغراض التسويق المباشر. يمكنك الاتصال بنا على </span>mikyajy@kojamjoom.com<span style="font-family: 'Arial',sans-serif;"> أو مجموعة كمال عثمان جمجوم ذ.م.م ، مركز سلطان للأعمال ، الطابق الثالث ، مكتب رقم 301 ، شارع عود ميثاء ، دبي - الإمارات العربية المتحدة.</span></p>`
      },
      {
        id: (this.id += 1),
        meta: {
          title:
            "تقدم Mikyajy.com بوابات دفع متعددة لتتمكنوا من التسوق بكل سهولة ويسر.",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title:
          "تقدم Mikyajy.com بوابات دفع متعددة لتتمكنوا من التسوق بكل سهولة ويسر.",
        summary: "",
        url: "/:store/payment-methods-ar",
        isHidden: true,
        html: `
      <p><span style="font-family: 'Arial',sans-serif;">تقدم </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> بوابات دفع متعددة لتتمكنوا من التسوق بكل سهولة ويسر. </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم قبول الدفع ببطاقة الائتمان أو بطاقة السحب الآلي من خلال شبكتي فيزا وماستر كارد.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">سيتم تقديم تفاصيل الدفع الخاصة بكم مباشرة إلى مزود الدفع لدينا عن طريق اتصال آمن. لمعرفة المزيد حول طرق الدفع المتوفرة لدينا يرجى قراءة قسم الشروط والأحكام.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يتم قبول الدفع بالعملات التالية</span>:</p>
      <p><span style="font-family: 'Arial',sans-serif;">الريال السعودي</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">درهم الامارات</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الدولار الأمريكي</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">بالإضافة إلى إتاحة خيار الدفع بالبطاقة، نقدم لكم</span>&nbsp;<span style="font-family: 'Arial',sans-serif;">أيضًا خيار الدفع عند التسليم. الأمر الذي يؤمن لكم إمكانية دفع الفاتورة بمجرد إيصال المنتجات إلى منزلكم</span>.</p>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى العلم أنه قد تكون هناك رسوم إضافية تطبق عند اختيار الدفع عند التسليم. هذه التكلفة الإضافية، إن وجدت، سوف يتم تفصيلها بوضوح في رسالة تأكيد طلبك. </span></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>`
      },
      {
        id: (this.id += 1),
        meta: {
          title: "الأسئلة الشائعة",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "الأسئلة الشائعة",
        summary: "",
        url: "/:store/faq-ar",
        isHidden: true,
        html: `<ol>
      <li>
      <p><span style="font-family: 'Arial',sans-serif;">الأسئلة الشائعة</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">فيما يتعلق بالحساب :</span></p>
      <ol>
      <li><span style="font-family: 'Arial',sans-serif;"> هل يتوجب علي إنشاء حساب للتسوق عبر الإنترنت؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">لا، &nbsp;يمكنك التسوق كضيف أيضًا. ولكن إذا قمت بإنشاء حساب للتسوق، فسيتم إطلاعك على آخر العروض والخصومات والأحداث المثيرة التي سنوفرها لك!</span></p>
      <ol start="2">
      <li><span style="font-family: 'Arial',sans-serif;"> ماذا علي أن أفعل إذا واجهت مشاكل في تسجيل الدخول إلى حسابي؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يرجى التأكد من تسجيل الدخول باستخدام عنوان البريد الإلكتروني وكلمة المرور اللذين استخدمتهم للتسجيل.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">إذا نسيت كلمة المرور الخاصة بحسابك، فأنقر على "هل نسيت كلمة المرور" واتبع الخطوات للوصول إلى حسابك مرة أخرى.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">تواصل معنا إذا كنت غير قادر على حل هذه المشكلة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">عامة:</span></p>
      <ol>
      <li><span style="font-family: 'Arial',sans-serif;"> من هي ماركة مكياجي؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">مكياجي هي ماركة عربية محلية للماكياج والعطور. نحن نقدم لكم أفضل الصيحات العالمية مع مراعاة الأذواق والتفضيلات المحلية في المنطقة. تعرف أكثر!</span></p>
      <p>&nbsp;</p>
      <ol start="2">
      <li><span style="font-family: 'Arial',sans-serif;"> أين تمت صناعة منتجاتنا؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">يتم تصنيع منتجاتنا في أحدث المنشآت في أوروبا!</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">التبديل والإرجاع:</span></p>
      <ol>
      <li><span style="font-family: 'Arial',sans-serif;"> ما هي سياسة الإرجاع؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">راحتك هي أولويتنا في مكياجي،&nbsp; لهذا السبب نقدم لك خيار التبديل أو إعادة المنتج واسترداد ثمنه. يمكنكم قراءة بنود سياسة التبديل والإرجاع الخاصة بنا هنا.</span></p>
      <ol start="2">
      <li><span style="font-family: 'Arial',sans-serif;"> لقد طلبت استرداد المبلغ لكني لم أسمع رد من فريق خدمة العملاء. ماذا يجب أن أفعل؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">اترك لنا رسالة</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">اتصل بنا مباشرة على </span>xxxx</p>
      <p><span style="font-family: 'Arial',sans-serif;">راسلنا عبر البريد الإلكتروني على </span>mikyajy@kojamjoom.com</p>
      <p>&nbsp;</p>
      <ol start="3">
      <li><span style="font-family: 'Arial',sans-serif;"> كم يستغرق استرداد ثمن المنتجات/ تبديلها؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">ا. داخل دولة الإمارات العربية المتحدة: 3 إلى 4 أيام عمل</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">ب. للمملكة العربية السعودية: من 5 إلى 7 أيام عمل</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">ج. بالنسبة للكويت وعمان والبحرين وقطر والطلبات الدولية: 7 أيام عمل</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">الطلبيات والتسليم</span></p>
      <ol>
      <li><span style="font-family: 'Arial',sans-serif;"> كيف يمكنني القيام بطلبية؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">إنه أمر سهل للغاية!</span></p>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> استعرض منتجاتنا وانقر على تلك التي تنوي شراءها.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> انقر فوق "إضافة إلى الحقيبة" لإضافة المنتجات إلى حقيبة التسوق الخاصة بك.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> لمراجعة المنتجات التي اخترتها، انقر على أيقونة الحقيبة الصغيرة في الزاوية اليمنى العليا.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> إذا كان لديك رمز خصم / عرض ، فأدخله في الحقل المخصص وانقر على "تطبيق". سيتم تحديث السعر الإجمالي لحقيبة التسوق الخاصة بك وعرضه وفقًا لذلك.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> يمكنك بعد ذلك الاشتراك أو تسجيل الدخول معنا للحصول على معلومات حول أحدث الإصدارات والعروض! هذه الخطوة اختيارية.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> راجع حقيبة التسوق الخاصة بك وانتقل إلى الخروج عندما تكون جاهزًا.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> املأ جميع التفاصيل المطلوبة للشحن وانقر على "حفظ ومتابعة".</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> راجع جميع تفاصيل طلبيتك وإجمالي مبلغ الشراء مرة أخرى قبل إتمام عملية الدفع.</span></li>
      </ul>
      <p><span style="font-family: 'Arial',sans-serif;">تهانينا تم القيام بالطلبية بنجاح! سترى على الفور تأكيد الطلبية مع رقمها. استخدم رقم الطلبية هذا لمزيد من المراسلات حول حالة طلبك. ستتلقى أيضًا رسالة بريد إلكتروني تحتوي على تفاصيل الطلبية، بما في ذلك رقم الطلبية وملخص للمنتجات التي تم طلبها بالأسعار والرموز الترويجية المطبقة ومعلومات الشحن و الفاتورة وطريقة </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">الشحن.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">كيف يمكنني إلغاء الطلبية؟</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">اتصل على رقم خدمة العملاء لدينا (&times;&times;&times;&times;&times;) وزودنا بتفاصيل الطلبية( رقم الطلبية ورقم بوليصة الشحن من ارامكس). ونحن سنقوم باللازم.</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">هل يمكنني أن أطلب التسليم لعنوان مختلف عن عنوان الدفع؟</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">بالطبع يمكنك ذلك! سيطلب منك إدخال عنوان الشحن بشكل منفصل عن عنوان الدفع المعتاد.</span></p>
      <ol start="6">
      <li><span style="font-family: 'Arial',sans-serif;"> ما هي رسوم التوصيل إلى دول مجلس التعاون الخليجي والشحن الدولي؟</span></li>
      </ol>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> رسوم التوصيل القياسي في جميع أنحاء الإمارات: 25 درهمًا إماراتيًا</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> رسوم الدفع عند التسليم في جميع أنحاء الإمارات: مجانية</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> رسوم التوصيل القياسي للمملكة العربية السعودية: 25 ريال سعودي</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> رسوم الدفع عند التسليم في جميع أنحاء المملكة العربية السعودية: 24 ريال سعودي</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> خيار الدفع عند التسليم لا ينطبق على الطلبات الدولية</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> توصيل مجاني للطلبيات التي تزيد عن 199 ريال سعودي</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> يرجى الملاحظة أنه قد يترتب على الطلبية رسوم جمركية وضرائب في وجهة الوصول.</span></li>
      </ul>
      <p><span style="font-family: 'Arial',sans-serif;">كيف يمكنني تتبع الطلبية ؟</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكنك تتبع الطلبية باستخدام بوليصة ارامكس للشحن على موقع ارامكس الإلكتروني المخصص لتتبع الشحنات.</span></p>
      <ol start="8">
      <li><span style="font-family: 'Arial',sans-serif;"> كيف يمكنني الاتصال بخدمة العملاء؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">&nbsp;نحن على بعد نقرة واحدة منك! </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">اترك لنا رسالة</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">اتصل بنا مباشرة على </span>xxxx</p>
      <p><span style="font-family: 'Arial',sans-serif;">راسلنا عبر البريد الإلكتروني على </span>mikyajy@kojamjoom.com</p>
      <p><span style="font-family: 'Arial',sans-serif;">أرسل رسالة مباشرة لنا على حساب الفيسبوك أو الانستغرام لدينا.</span></p>
      <p>&nbsp;</p>
      <ol start="9">
      <li><span style="font-family: 'Arial',sans-serif;"> كم من الوقت يستغرق التسليم المحلي/ الدولي؟</span></li>
      </ol>
      <p><span style="font-family: 'Arial',sans-serif;">ا. داخل المملكة العربية السعودية والإمارات العربية المتحدة: من 2 إلى 3 أيام عمل</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">ب. بالنسبة للكويت وعمان والبحرين وقطر والطلبات الدولية: من 5 إلى 7 أيام عمل</span></p>
      <p>&nbsp;</p>
      <ol start="10">
      <li><span style="font-family: 'Arial',sans-serif;"> كيفية تطبيق الرمز الترويجي؟</span></li>
      </ol>
      <ul>
      <li><span style="font-family: 'Arial',sans-serif;"> بمجرد اختيارك للمنتجات التي ترغب في شرائها وإضافتها إلى حقيبة التسوق الخاصة بك، انقر فوق رمز الحقيبة الصغيرة الموجود في الزاوية العلوية اليمنى من أجل الخروج.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> أدخل الرمز الترويجي في الحقل المحدد وانقر فوق "تطبيق". سيتم تحديث السعر الإجمالي لحقيبة التسوق الخاصة بك وعرضه وفقًا لذلك.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> يمكنك بعد ذلك المتابعة لإضافة تفاصيل الشحن الخاصة بك وإجراء عملية الدفع.</span></li>
      <li><span style="font-family: 'Arial',sans-serif;"> يرجى ملاحظة: بعض الرموز الترويجية لا يمكن استخدامها عدة مرات.</span></li>
      </ul>
      <p>&nbsp;</p>
      </li>
      </ol>`
      },
      {
        id: (this.id += 1),
        meta: {
          title: "سياسة التسليم",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "سياسة التسليم",
        summary: "",
        url: "/:store/delivery-policy-ar",
        isHidden: true,
        html: `<p><span style="font-family: 'Arial',sans-serif;">سياسة التسليم</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">تفخر </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> بالشراكة مع ارامكس بتسليم جميع الطلبيات عبر الإنترنت.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لا تقوم </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> بالبيع أو ارامكس بالتسليم إلى أي بلد محظور بموجب القانون الإماراتي أو عقوبات أوفاك. يرجى التحقق من قائمة الدول التي لا تقوم ارامكس بالتوصيل إليها.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لن تتعامل </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> أو تقدم أي خدمات أو منتجات إلى أي من البلدان المحظورة وفقاً لمكتب مراقبة الأصول الأجنبية (</span>OFAC<span style="font-family: 'Arial',sans-serif;">) وانسجاماً مع قانون دولة الإمارات العربية المتحدة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">قد يؤدي التسليم على مراحل/ الشحنات المتعددة إلى ظهور دفعات جزئية متعددة على كشف الحساب الشهري لحامل البطاقة.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">نرجو العلم أنه قد يترتب على الطلبية رسوم جمركية وضرائب في وجهة الوصول. ليس لدى </span>Mikyajy.com<span style="font-family: 'Arial',sans-serif;"> أي سيطرة أو تأثير على هذه الرسوم ولا يمكننا التنبؤ بمبلغها. يرجى الاتصال بارامكس أو مكتب الجمارك المحلي للحصول على مزيد من المعلومات أو انقر هنا لعرض مزيد من التفاصيل.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">يمكن تقسيم طلبية واحدة إلى شحنات متعددة، وهذا يتوقف على مدى توفر المنتج و/ أو حدود الوزن المفروضة من قبل ارامكس على الطرود. يرجى العلم بأنه قد تؤدي الشحنات المتعددة إلى ظهور دفعات جزئية متعددة على كشف الحساب الشهري لحامل بطاقة الائتمان أو الخصم.</span></p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>`
      },
      {
        id: (this.id += 1),
        meta: {
          title: "الاتصال بنا",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "الاتصال بنا",
        summary: "",
        url: "/:store/contact-us-ar",
        isHidden: true,
        html: `<p><span style="font-family: 'Arial',sans-serif;">الاتصال بنا</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لا تترددوا في الاتصال بنا عبر الهاتف أو البريد الإلكتروني أو عن طريق إرسال رسالة خاصة من خلال صفحتنا على الفيسبوك أو الانستغرام.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">التفاصيل:</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">عنوان المكتب: مركز سلطان للأعمال ، 301 ، الطابق الثالث ، عود ميثاء ، دبي ، الإمارات العربية المتحدة</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">صندوق البريد: 27844</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">رقم الهاتف الثابت:</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">عنوان البريد الإلكتروني: </span>mikyajy@kojamjoom.com</p>`
      },
      {
        id: (this.id += 1),
        meta: {
          title: "نبذة عنا",
          description: "",
          keywords: "",
          creator: "Mansour AlThani",
          date: "01/01/2018"
        },
        template: "Page",
        name: "Page",
        title: "نبذة عنا",
        summary: "",
        url: "/:store/about-us-ar",
        isHidden: true,
        html: `<p><span style="font-family: 'Arial',sans-serif;">نبذة عنا</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">مرحبًا بكم في عالم مكياجي الغني بالألوان! منذ إنشائها قبل 20 عامًا كشركة رائدة في مستحضرات التجميل الملونة والعطور الخليجية، نمت مكياجي لتضم شبكة ذات روابط قوية تضم &times;&times;&times; معجبين أوفياء! تعود فكرة مكياجي إلى السيد كمال عثمان جمجوم&nbsp; والذي ينحدر من أصول سعودية ويتفهم تمامًا الفروق والاحتياجات الثقافية في المنطقة. لقد قاد مجموعة كمال عثمان جمجوم لعقود من الزمن ورعاها بنجاحها الحالي.</span></p>
      <p><span style="font-family: 'Arial',sans-serif;">استوحى السيد كمال فكرة مكياجي من النساء والبنات في عائلته. فقد لاحظ بعض الفجوات في هذه الصناعة من خلال الحوارات التي كانت تدور بينهم حول المكياج في عدة مناسبات. في بعض الأحيان كانت حول النقص في بعض الألوان وكثافة اللون، وفي أحيان أخرى حول قوة بقاء المستحضرات، بالمجمل كان هناك عدم رضى عن المنتجات في السوق. ركّز السيد كمال على هذه الفكرة وردم هذه الفجوة بابتكار علامة مكياجي. تعني كلمة "مكياجي"&nbsp; باللغة العربية المكياج الخاص بي والذي ينبع من فكرة أن المكياج هو تجربة شخصية لكل فتاة. نسعى كل يوم في مكياجي على جعل المكياج ممتع ومرح وغير مألوف وحيوي بالشكل الذي تستحقه معجباتنا الرائعات! نؤمن بأن كل البنات حلوين، ونرغب في أن يتمكنوا من الظهور للعالم بكل ثقة! </span></p>
      <p><span style="font-family: 'Arial',sans-serif;">لدينا فريق عمل شغوف وذو خبرة كافية كفريق بحوث المنتجات وفريق تطوير وجودة المنتجات والموجودين للحرص على حصولكم على أفضل المنتجات الملونة ( للعيون والشفاه والأظافر والوجه) والعطور والهدايا ( صناديق المكياج المتكاملة) ومجموعات رائعة موسمية محدودة الإصدار. نقدم لكم أفضل الصيحات العالمية مع الأخذ بعين الاعتبار أذواقكم وتفضيلاتكم الشخصية. لتحصلوا بالضبط على ماتحتاجونه مع ضمان الجودة على يد المصنعين الأكثر تطوراً في أوروبا.</span></p>
      <p>&nbsp;</p>
      <p><span style="font-family: 'Arial',sans-serif;">سواء أكنتي مبتدئة وتجدين صعوبة في وضع المكياج أم كنتي تحبين التجربة والإطلالات الغير مألوفة أو كنتي خبيرة وتعرفين بالضبط ما الذي يليق بك، فإن مكياجي هي الحل الذي لاغنى لك عنه! نحن شراكائك لتتمتعي بالجمال الآسر وسنساعدك على اختيار منتجات لن تندمي على اقتنائها! أعثري على أي درجة وأي لمسة نهائية ومجموعة رائعة من العطور العصرية في محلاتنا المنتشرة في المملكة العربية السعودية, الإمارات العربية المتحدة, عمان, قطر, البحرين والكويت! كما ستستمتعين بتجربة رائعة في متجر مكياجي الإلكتروني! نحن متحمسين للغاية لتلبية كافة احتياجتكم فيما يتعلق بجمالكم بكل حب وشغف!</span></p>`
      }
    ];
  }

  get({ id, url, data }) {
    let result;

    if (data.url) {
      // workaround to replace duplicate slashes
      data.url = data.url.replace(/\/\//, "/");
      result = this.pages.find(n => pathToRegexp(n.url).test(data.url));
    }

    if (!result) {
      result = this.pages.find(n => n.url === "/page-not-found/");
    }

    return Promise.resolve(result);
  }
}
