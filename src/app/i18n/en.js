const ja = () => ({
  locale: 'en',
  messages: {
    // -------------------------------------------
    //  GENERAL
    //

    'account.followers': 'Followers',
    'account.following': 'Following',
    'account.media': 'Media',

    'form.email_address': 'Email Address',
    'form.password': 'Password',
    'form.password_confirm': 'Confirm Password',

    'validate.email_address': 'Invalid email address',
    'validate.required': 'Field Required',
    'validate.field_required': 'Field Required',
    'validate.min_length_8': 'Password must be at least 8 characters.',
    'validate.accepted_value_min_8': 'Must be at least 8 characters.',

    // -------------------------------------------
    // -------------------------------------------

    'app.index.message':
            'Your email is awaiting verification! Please check your inbox and follow the link to start using Autolikes.',

    // -------------------------------------------

    'footer.index.faq': 'FAQ & Support',
    'footer.index.terms': 'Terms of Services',
    'footer.index.privacy': 'Privacy Policy',

    // -------------------------------------------


    'dashboard.account.details.stopped': 'Service stopped',
    'dashboard.account.details.running': 'Service running',

    'dashboard.account.details.expired': 'Your free trial has expired. Please subscribe to continue using Autolikes by clicking Manage Subscription button below.',
    'dashboard.account.details.trial': 'Trial-Account',
    'dashboard.account.details.business': 'Business-Account',
    'dashboard.account.details.premium': 'Premium-Account',
    'dashboard.account.details.manage': 'Manage Subscription',

    'dashboard.account.header.settings': 'Settings',
    'dashboard.account.header.activity': 'Activity Logs',
    'dashboard.account.header.team': 'Team Members',

    // -------------------------------------------

    // 'dashboard.account.settings.' -> 'd_a_s'

    'd_a_s.clear': 'CLEAR',


    'd_a_s.basic.on': 'ON',
    'd_a_s.basic.off': 'OFF',
    'd_a_s.basic.min': 'Minimum',
    'd_a_s.basic.max': 'Maximum',

    //

    'd_a_s.basic.headerMsg': 'Warning: Speed / Filter Settings is only available to Premium users.',
    'd_a_s.basic.speed_filter_setup': 'Speed / Filter Setup',
    'd_a_s.basic.speed_filter_setup_note': 'Customize your setup by adding filters.',

    'd_a_s.basic.speed': 'Speed',
    'd_a_s.basic.speed_exp': 'Measure of like interaction on Instagram posts',

    'd_a_s.basic.speedMsg': 'The speed relates to the number of posts. If you only have fewer posts, the speed should be SLOW to avoid spam detection by Instagram. Therefore, Autolikes recommends you to increase Instagram activity to enjoy a faster speed.',

    'd_a_s.basic.speed.slow': 'Slow',
    'd_a_s.basic.speed.normal': 'Normal',
    'd_a_s.basic.speed.fast': 'Fast',

    //

    'd_a_s.basic.media_age': 'Media Age',
    'd_a_s.basic.media_age.existence': 'Existence of posts on Instagram',
    'd_a_s.basic.media_age.age': 'Age',

    'd_a_s.basic.media_age.any': 'Any',
    'd_a_s.basic.media_age.new': 'Newest',
    'd_a_s.basic.media_age.1h': '1 Hour Ago',
    'd_a_s.basic.media_age.3h': '3 Hours Ago',
    'd_a_s.basic.media_age.12h': '12 Hours Ago',
    'd_a_s.basic.media_age.1d': '1 Day Ago',
    'd_a_s.basic.media_age.3d': '3 Days Ago',
    'd_a_s.basic.media_age.1w': '1 Week Ago',
    'd_a_s.basic.media_age.2w': '2 Weeks Ago',
    'd_a_s.basic.media_age.1m': '1 Month Ago',

    //

    'd_a_s.basic.number_likes': 'Number of Likes',
    'd_a_s.basic.number_likes.range': 'Range number of media likes',

    //

    'd_a_s.basic.number_followers': 'Number of Followers',
    'd_a_s.basic.number_followers.range': 'Range number of user followers with valid posts to automatically like',

    //

    'd_a_s.basic.relation': 'User Relation',
    'd_a_s.basic.relation.relationship': 'Relationship to the users with qualified media',
    'd_a_s.basic.relation.relationship_label': 'Relationship',
    'd_a_s.basic.relation.off': 'Off',
    'd_a_s.basic.relation.followers': 'Followers',
    'd_a_s.basic.relation.followings': 'Followings',
    'd_a_s.basic.relation.both': 'Both',

    //

    'd_a_s.basic.media_type': 'Media Type',
    'd_a_s.basic.media_type.type_of': 'Type of posts',
    'd_a_s.basic.media_type.type': 'Type',
    'd_a_s.basic.media_type.any': 'Any',
    'd_a_s.basic.media_type.pic': 'Pictures',
    'd_a_s.basic.media_type.vid': 'Videos',

    //

    'd_a_s.basic.number_comments': 'Number of Comments',
    'd_a_s.basic.number_comments.range': 'Range number of media comments',

    //

    'd_a_s.basic.number_following': 'Number of Following',
    'd_a_s.basic.number_following.range': 'Range number of user following',

    //

    'd_a_s.basic.save': 'Save Filter',

    //

    'd_a_s.BlockedTags.header.warning': 'Warning: Blocked Hashtags is only available to Premium users.',
    'd_a_s.BlockedTags.header.blocked': 'Blocked Hashtags',
    'd_a_s.BlockedTags.header.note': 'Add tags to prevent any interaction with any media contained blocked hashtags.',

    'd_a_s.BlockedTags.addForm.placeholder': 'New Hashtag',
    'd_a_s.BlockedTags.addForm.block': 'Block Tag',

    'd_a_s.BlockedTags.tagList.add': 'Add hashtags to block.',


    //

    'd_a_s.BlockedUsers.header.warning': 'Warning: Blocked Users is only available to Premium users.',
    'd_a_s.BlockedUsers.header.blocked': 'Blocked Users',
    'd_a_s.BlockedUsers.header.note': 'Add the users that you want to prevent interaction with.',

    'd_a_s.BlockedUsers.addForm.placeholder': 'Instagram Username',
    'd_a_s.BlockedUsers.addForm.search': 'Search User',

    'd_a_s.BlockedUsers.blockedUser.add': 'Add users to block.',
    'd_a_s.BlockedUsers.blockedUser.remove': 'Remove Blocked User',

    //

    'd_a_s.DeleteAccount.index.remove': 'Remove this Instagram Account',
    'd_a_s.DeleteAccount.index.desc': 'Once you delete this account, there is no going back. Please be certain.',
    'd_a_s.DeleteAccount.index.delete': 'Delete',

    //


    'd_a_s.SearchHashTags.addForm.newhashtags': 'New Hashtag',
    'd_a_s.SearchHashTags.addForm.search': 'Search Tag',

    'd_a_s.SearchHashTags.header.hashtags': 'Hashtags',
    'd_a_s.SearchHashTags.header.independently': 'Hashtag, Location and Super Targeting settings will work independently.',
    'd_a_s.SearchHashTags.header.exp': 'Add hashtags that you want to target.',

    'd_a_s.SearchHashTags.liked.add': 'Add hashtags to like.',
    'd_a_s.SearchHashTags.liked.remove': 'Remove Tag',

    //

    'd_a_s.SearchLocation.addForm.name': 'Location Name',
    'd_a_s.SearchLocation.addForm.search': 'Search Location',


    'd_a_s.SearchLocation.header.warning': 'Warning: Location is only available to Premium users.',
    'd_a_s.SearchLocation.header.location': 'Location',
    'd_a_s.SearchLocation.header.exp': 'Add locations for nearest media around them',

    'd_a_s.SearchLocation.LikedLocation.remove': 'Remove Location',
    'd_a_s.SearchLocation.LikedLocation.liked': 'Add location to like.',

    //

    'd_a_s.TargetUser.addForm.add': 'Add User',
    'd_a_s.TargetUser.addForm.target': 'Target User',

    'd_a_s.TargetUser.header.warning': 'Warning: Super Targeting is only available to Premium users.',
    'd_a_s.TargetUser.header.super': 'Super Targeting',
    'd_a_s.TargetUser.header.exp': 'Our bot will like the followers of the targeted user and it gives your account the opportunity to attract followers of specified users.',

    'd_a_s.TargetUser.lists.add': 'Add users to target.',


    // -------------------------------------------

    'dashboard.accounts.addaccount.add_account': 'ADD ACCOUNT',

    'dashboard.accounts.addaccount_modal.add_account':
            'Add Instagram Account',
    'dashboard.accounts.addaccount_modal.2fa':
            'Autolikes does not support 2 Factor Authentication. If you are setting 2FA, please once turn off the 2FA. After adding account to Autolikes, you can set 2FA again.',
    'dashboard.accounts.addaccount_modal.security':
            'Your account security is very important to us!',
    'dashboard.accounts.addaccount_modal.password_required':
            "The password is required to establish connection with Instagram and rest assured that we won't store this information.",
    'dashboard.accounts.addaccount_modal.username': 'Instagram Username',
    'dashboard.accounts.addaccount_modal.password': 'Instagram Password',
    'dashboard.accounts.addaccount_modal.cancel': 'Cancel',

    // -------------------------------------------

    'forgot.form.recover_password': 'Recover Your Password',
    'forgot.form.recover_howto':
            'To recover your password, enter the email address you use to sign in to Autolikes.',
    'forgot.form.register_html':
            "Don't have an account yet? <a className='btn-link' href='/register'>Sign up now!</a>",
    'forgot.form.recover_btn': 'Recover Password',

    //  -------------------------------------------

    'header.nav.profile': 'Profile',
    'header.nav.settings': 'Settings',
    'header.nav.logout': 'Logout',

    //  -------------------------------------------

    'home.index.header.sign_up': 'SIGN UP',
    'home.index.header.sign_in': 'SIGN IN',

    'home.index.section1.slogan':
            'GROW YOUR INSTAGRAM FOLLOWERS WITH OUR SMART PLATFORM.',
    'home.index.section1.slogan2':
            'Let Autolikes assist you in your social media needs.',
    'home.index.section1.get_started': 'get started',
    'home.index.section1.how_it_works': 'see how it works',

    'home.index.section2.how_it_works': 'How it works',
    'home.index.section2.1': 'Instagram Account',
    'home.index.section2.1_1':
            'First you add your personal or your company’s Instagram account.',
    'home.index.section2.2': 'Target Hashtag',
    'home.index.section2.2_1':
            'Then you add hashtags that you want to target i.e: #food, #fun etc.',
    'home.index.section2.3': 'Smart Bots',
    'home.index.section2.3_1':
            'Our smart bots will then start working in the background sending likes all over the network.',
    'home.index.section2.4': 'Growth',
    'home.index.section2.4_1':
            'Users will then start noticing your brand, company or product and will most likely follow you.',

    'home.index.section3.title': 'What we offer',
    'home.index.section3.sub-title':
            'Grow your company, brand, product or personal Instagram account with us.',

    'home.index.section3.1': 'Targeting with hashtags',
    'home.index.section3.1_1':
            'You can choose to engage only with relevant users or cast the net wide.',
    'home.index.section3.2': 'Locations based',
    'home.index.section3.2_1':
            'Geographically target your new followers with our location-based liking.',
    'home.index.section3.3': 'Fully automated',
    'home.index.section3.3_1':
            'Once you set up, Autolikes automatically likes the photos while you work or even while you sleep.',
    'home.index.section3.4': 'Customize everything',
    'home.index.section3.4_1':
            'Autolikes is flexible and customizable to suit your unique needs so you have a competitive advantage over your competitors.',
    'home.index.section3.join': 'Join Now',

    'home.index.footer.terms': 'TERMS OF SERVICE',
    'home.index.footer.pp': 'PRIVACY POLICY',
    'home.index.footer.contact': 'CONTACT',
    'home.index.footer.faq': 'FAQ',

    //  -------------------------------------------

    'login.form.sign_in': 'Sign In',
    'login.form.sign_in_text': 'Sign in to your account',
    'login.form.sign_in_button': 'Sign In',
    'login.form.forgot': 'Forgot your password?',
    'login.form.register_html':
            'New to Autolikes? <a className="btn-link" href="/register">Sign up now <i className="fa fa-angle-double-right" /></a>',

    //  -------------------------------------------

    'profile.emailform.email': 'Email',
    'profile.emailform.update': 'UPDATE YOUR EMAIL',
    'profile.emailform.email_address': 'Email address',

    'profile.header.edit': 'Edit',
    'profile.header.cancel': 'Cancel',
    'profile.header.update': 'Update',

    'profile.passwordform.password': 'Password',
    'profile.passwordform.update': 'Update Your Password',
    'profile.passwordform.current': 'Current Password',
    'profile.passwordform.new': 'New Password',
    'profile.passwordform.confirm': 'Confirm Password',

    'profile.profile.resend': 'Resend Verification',

    //  -------------------------------------------

    'register.form.sign_up': 'Sign Up',
    'register.form.create': 'Create your account',
    'register.form.sign_up_button': 'Sign Up',
    'register.form.sign_in': 'Sign in now!',
    'register.form.agree_html':
            "By signing up, you agree to the <a className='btn-link' href='/terms-of-service'>Terms of Service</a> and <a className='btn-link' href='/privacy'>Privacy Policy</a>, including Cookie Use.",

    //  -------------------------------------------

    'resetpw.index.reset_password': 'Reset Password',
    'resetpw.index.set_password': 'Set Password',

    //  -------------------------------------------

    'sidebar.index.main_menu': 'Main Menu',
    'sidebar.index.dashboard': 'Dashboard',
    'sidebar.index.add_account': 'Add Account',
    'sidebar.index.info': 'INFO AND SUPPORT',
    'sidebar.index.faq': 'FAQ & Support',

    //  -------------------------------------------
    //  -------------------------------------------


  },
});

export default ja;
