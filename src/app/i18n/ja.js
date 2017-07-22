const ja = () => ({
  locale: 'ja',
  messages: {
    // -------------------------------------------
    //  GENERAL
    //

    'account.followers': 'フォロワー',
    'account.following': 'フォロー',
    'account.media': '投稿',

    'form.email_address': 'メールアドレス',
    'form.password': 'パスワード',
    'form.password_confirm': 'パスワード(確認用)',

    'validate.email_address': '無効なメールアドレスです。',
    'validate.required': '入力は必須です。',
    'validate.field_required': '入力は必須です。',
    'validate.min_length_8': 'パスワードは8文字以上にしてください。',
    'validate.accepted_value_min_8': '最低8文字です。',

    // -------------------------------------------
    // -------------------------------------------

    'app.index.message': 'メールアドレスの確認待ちです。メールを確認して、確認用のリンクにアクセスしてください。',

    // -------------------------------------------

    'footer.index.faq': 'よくある質問',
    'footer.index.terms': '利用規約',
    'footer.index.privacy': 'プライバシーポリシー',

    // -------------------------------------------

    'dashboard.account.details.stopped': '停止中',
    'dashboard.account.details.running': '作動中',

    'dashboard.account.details.expired': '無料のお試し期間が終了しました。続けてご利用になるには有料プランのご利用が必要です。',
    'dashboard.account.details.trial': 'お試し期間',
    'dashboard.account.details.business': 'ビジネスプラン',
    'dashboard.account.details.premium': 'プレミアムプラン',
    'dashboard.account.details.manage': '利用プラン管理',

    'dashboard.account.header.settings': '設定',
    'dashboard.account.header.activity': 'ログ',
    'dashboard.account.header.team': '共有設定',

    // -------------------------------------------

    // 'dashboard.account.settings.' -> 'd_a_s'

    'd_a_s.clear': 'クリア',

    'd_a_s.basic.headerMsg': '※ 詳細設定はプレミアムプランでのみご利用可能です。',
    'd_a_s.basic.speed_filter_setup': '詳細設定',
    'd_a_s.basic.speed_filter_setup_note': '各自動いいね機能の振る舞いを細かく設定できます。ハッシュタグ・ロケーション・スーパーターゲティングに共通して適用されます。',

    'd_a_s.basic.on': 'オン',
    'd_a_s.basic.off': 'オフ',
    'd_a_s.basic.min': '最小',
    'd_a_s.basic.max': '最大',

    //

    'd_a_s.basic.speed': '速度',
    'd_a_s.basic.speed_exp': 'いいねをするペース設定です。',

    'd_a_s.basic.speedMsg': 'Instagramに登録してすぐで、特に投稿している画像が少ない場合は、いいねをする速度を「ゆっくり」に設定してください。Instagramがスパムユーザであると判定するケースがありますのでご注意ください。',
    'd_a_s.basic.speed.slow': 'ゆっくり',
    'd_a_s.basic.speed.normal': '普通',
    'd_a_s.basic.speed.fast': '早い',

    //

    'd_a_s.basic.media_age': '投稿時間',
    'd_a_s.basic.media_age.existence': '指定した時間より新しい写真にだけいいねします。',
    'd_a_s.basic.media_age.age': '時間',

    'd_a_s.basic.media_age.any': 'いつでも',
    'd_a_s.basic.media_age.new': '最新のみ',
    'd_a_s.basic.media_age.1h': '1時間前',
    'd_a_s.basic.media_age.3h': '3時間前',
    'd_a_s.basic.media_age.12h': '12時間前',
    'd_a_s.basic.media_age.1d': '1日前',
    'd_a_s.basic.media_age.3d': '3日前',
    'd_a_s.basic.media_age.1w': '1週間前',
    'd_a_s.basic.media_age.2w': '2週間前',
    'd_a_s.basic.media_age.1m': '1ヶ月前',

    //

    'd_a_s.basic.number_likes': 'いいねの数',
    'd_a_s.basic.number_likes.range': '指定された範囲のいいねがついた写真のみにいいねします。0を指定すると無視されます。',

    //
    'd_a_s.basic.number_followers': 'フォロワー人数',
    'd_a_s.basic.number_followers.range': '指定された範囲のフォロワーのいるユーザーが投稿した写真のみにいいねします。0を指定すると無視されます。',

    //

    'd_a_s.basic.relation': 'フォロー状況',
    'd_a_s.basic.relation.relationship': 'フォロー中のユーザーが投稿した写真のみにいいねすることが可能です。',
    'd_a_s.basic.relation.relationship_label': '関係',
    'd_a_s.basic.relation.off': '設定しない',
    'd_a_s.basic.relation.followers': 'フォロワーのみ',
    'd_a_s.basic.relation.following': 'フォロー中のみ',
    'd_a_s.basic.relation.both': 'すべて',

    //

    'd_a_s.basic.media_type': 'メディア種別',
    'd_a_s.basic.media_type.type_of': '指定されたタイプのメディアにのみいいねします。',
    'd_a_s.basic.media_type.type': '種別',
    'd_a_s.basic.media_type.any': 'なんでも',
    'd_a_s.basic.media_type.pic': '写真のみ',
    'd_a_s.basic.media_type.vid': '動画のみ',

    //

    'd_a_s.basic.number_comments': 'コメントの数',
    'd_a_s.basic.number_comments.range': '指定された範囲の数のコメントがついている写真のみにいいねします。0を指定すると無視されます。',

    //

    'd_a_s.basic.number_following': 'フォロー人数',
    'd_a_s.basic.number_following.range': '指定された範囲の人数をフォローしているユーザーが投稿した写真のみにいいねします。0を指定すると無視されます。',

    //

    'd_a_s.basic.save': '詳細設定を保存',

    //

    'd_a_s.BlockedTags.header.warning': '※ 禁止ハッシュタグ設定はプレミアムプランでのみご利用可能です。',
    'd_a_s.BlockedTags.header.blocked': '禁止ハッシュタグ',
    'd_a_s.BlockedTags.header.note': 'ここで設定したハッシュタグがついた写真にはいいねしません。',

    'd_a_s.BlockedTags.addForm.placeholder': 'ハッシュタグ',
    'd_a_s.BlockedTags.addForm.block': '追加',

    'd_a_s.BlockedTags.tagList.add': '禁止するハッシュタグを追加してください。',

    //

    'd_a_s.BlockedUsers.header.warning': '※ 禁止ユーザー設定はプレミアムプランでのみご利用可能です。',
    'd_a_s.BlockedUsers.header.blocked': '禁止ユーザー',
    'd_a_s.BlockedUsers.header.note': 'ここで設定したユーザーが投稿した写真にはいいねしません。',

    'd_a_s.BlockedUsers.addForm.placeholder': 'ユーザー名',
    'd_a_s.BlockedUsers.addForm.search': '検索',

    'd_a_s.BlockedUsers.blockedUser.add': '禁止するユーザー名を追加してください。',
    'd_a_s.BlockedUsers.blockedUser.remove': '削除',


    //

    'd_a_s.DeleteAccount.index.remove': 'インスタグラムアカウントをAutolikesから削除',
    'd_a_s.DeleteAccount.index.desc': 'Autolikes上でのこのアカウントに関する設定などが消えますのでご注意ください。',
    'd_a_s.DeleteAccount.index.delete': '削除',

    //


    'd_a_s.SearchHashTags.addForm.newhashtags': '検索するハッシュタグ',
    'd_a_s.SearchHashTags.addForm.search': '検索',

    'd_a_s.SearchHashTags.header.hashtags': 'ハッシュタグ',
    'd_a_s.SearchHashTags.header.independently': 'ハッシュタグ・ロケーション・スーパーターゲティングの設定はそれぞれ個別に動作します。自動いいねを開始するにはどれか一つを設定してください。',
    'd_a_s.SearchHashTags.header.exp': 'ハッシュタグを検索して追加します。ここで設定したハッシュタグがついた画像に自動でいいねします。',

    'd_a_s.SearchHashTags.liked.add': 'いいねする対象のハッシュタグを設定してください。',
    'd_a_s.SearchHashTags.liked.remove': 'タグを削除',

    //

    'd_a_s.SearchLocation.addForm.name': '場所名・地名など',
    'd_a_s.SearchLocation.addForm.search': '検索',

    'd_a_s.SearchLocation.header.warning': '※ ロケーション機能はプレミアムプランでのみご利用可能です。',
    'd_a_s.SearchLocation.header.location': 'ロケーション',
    'd_a_s.SearchLocation.header.exp': '指定された場所で投稿された画像に自動でいいねします。',

    'd_a_s.SearchLocation.LikedLocation.remove': 'ロケーションを削除',
    'd_a_s.SearchLocation.LikedLocation.liked': 'いいねする対象のロケーション情報を設定してください。',

    //

    'd_a_s.TargetUser.addForm.add': '追加',
    'd_a_s.TargetUser.addForm.target': 'ターゲットにするユーザー',

    'd_a_s.TargetUser.header.warning': '※ スーパーターゲティングはプレミアムプランでのみご利用可能です。',
    'd_a_s.TargetUser.header.super': 'スーパーターゲティング',
    'd_a_s.TargetUser.header.exp': 'ここで設定したユーザーをフォローしている人の投稿に対していいねします。競合ユーザーのフォロワーにアピールしたい、などの際に便利です。',

    'd_a_s.TargetUser.lists.add': 'ターゲットにするユーザーを追加してください。',

    // -------------------------------------------

    'dashboard.accounts.addaccount.add_account': 'アカウントを追加',

    'dashboard.accounts.addaccount_modal.add_account': 'インスタグラムアカウントを追加',
    'dashboard.accounts.addaccount_modal.2fa':
            'Autolikesは二段階認証をサポートしていません。二段階認証を設定中の方はお手数ですが一度設定をオフにしていただき、Autolikesにインスタグラムアカウントを追加後再設定ください。',
    'dashboard.accounts.addaccount_modal.security':
            'Autolikesはアカウントのセキュリティを大切にしています。',
    'dashboard.accounts.addaccount_modal.password_required':
            'インスタグラムのユーザー名とパスワードはインスタグラムへのログイン情報を取得する為だけに利用します。外部にシェアされることはありません。',
    'dashboard.accounts.addaccount_modal.username': 'インスタグラムのユーザー名',
    'dashboard.accounts.addaccount_modal.password': 'インスタグラムのパスワード',
    'dashboard.accounts.addaccount_modal.cancel': 'キャンセル',

    // -------------------------------------------

    'forgot.form.recover_password': 'パスワードを再設定する',
    'forgot.form.recover_howto':
            'Autolikes登録時に設定いただいたメールアドレスを入力してください。パスワード再設定用のリンクをお送りします。',
    'forgot.form.register_html':
            'アカウントをお持ちでない場合 <a className="btn-link" href="/register">アカウント作成 »<i className="fa fa-angle-double-right" /></a>',
    'forgot.form.register_html.ja':
            'アカウントをお持ちでない場合 <a className="btn-link" href="/register/?locale=ja">アカウント作成 »<i className="fa fa-angle-double-right" /></a>',
    'forgot.form.recover_btn': 'パスワードを再設定',

    //  -------------------------------------------

    'header.nav.profile': 'プロフィール',
    'header.nav.settings': '設定',
    'header.nav.logout': 'ログアウト',

    //  -------------------------------------------

    'home.index.header.sign_up': 'ユーザー登録',
    'home.index.header.sign_in': 'ログイン',

    'home.index.section1.slogan': 'インスタグラムのフォロワーやいいねを増やそう！',
    'home.index.section1.slogan2':
            'Autolikes（オートライクス）があなたのインスタグラムを運用し、完全自動でフォロワーといいねが増えていきます。',
    'home.index.section1.get_started': '無料で試す',
    'home.index.section1.how_it_works': 'Autolikesの仕組み',

    'home.index.section2.how_it_works': 'Autolikesの仕組み',
    'home.index.section2.1': 'Instagramアカウントを登録',
    'home.index.section2.1_1':
            'まずはフォロワーやいいねを増やしたいInstagramのアカウントをAutolikesに追加します。',
    'home.index.section2.2': 'ハッシュタグを設定',
    'home.index.section2.2_1': 'いいねをしたい対象のハッシュタグを設定します。',
    'home.index.section2.3': 'あなたに代わって自動でいいね',
    'home.index.section2.3_1':
            'Autolikesがあなたに代わって、ハッシュタグのついた写真に自動でいいねをします。',
    'home.index.section2.4': 'アカウントが成長',
    'home.index.section2.4_1':
            'あなたのいいねに反応して、たくさんの人達があなたのInstagramをチェックして、いいねやフォローが増えていきます。',

    'home.index.section3.title': 'Autolikesでできること',
    'home.index.section3.sub-title':
            'Autolikesであなたの会社やブランド、製品、あなた自身のInstagramアカウントを成長させましょう。',

    'home.index.section3.1': 'ハッシュタグをターゲット',
    'home.index.section3.1_1': 'あなたが集めたいフォロワーに適したハッシュタグを登録しましょう。',
    'home.index.section3.2': '位置情報をターゲット',
    'home.index.section3.2_1': '特定の場所やお店でアップされた写真のみに自動でいいねをすることもできます。',
    'home.index.section3.3': '完全に自動',
    'home.index.section3.3_1':
            '一度設定すれば、あなたが仕事をしている間や眠っている間でさえAutolikesが自動で働きます。',
    'home.index.section3.4': '詳細なカスタマイズ',
    'home.index.section3.4_1':
            '一定以上のいいねやコメントがついた写真にだけいいねをつけたり、いいねをする速度を変更したりと詳細な設定が可能です。',
    'home.index.section3.join': 'いますぐ試す',

    'home.index.footer.terms': '利用規約',
    'home.index.footer.pp': 'プライバシーポリシー',
    'home.index.footer.contact': 'お問い合わせ',
    'home.index.footer.faq': 'よくある質問',

    //  -------------------------------------------

    'login.form.sign_in': 'Autolikesにログイン',
    'login.form.sign_in_text': '設定を開始するにはログインしてください',
    'login.form.sign_in_button': 'ログイン',
    'login.form.forgot': 'パスワードを忘れた場合はこちら',
    'login.form.register_html':
            'アカウントをお持ちでない場合 <a className="btn-link" href="/register">アカウント作成 »<i className="fa fa-angle-double-right" /></a>',
    'login.form.register_html.ja':
            'アカウントをお持ちでない場合 <a className="btn-link" href="/register/?locale=ja">アカウント作成 »<i className="fa fa-angle-double-right" /></a>',

    //  -------------------------------------------

    'profile.emailform.email': 'メールアドレス',
    'profile.emailform.update': 'メールアドレスの変更',
    'profile.emailform.email_address': 'メールアドレス',

    'profile.header.edit': '変更',
    'profile.header.cancel': 'キャンセル',
    'profile.header.update': '保存する',

    'profile.passwordform.password': 'パスワード',
    'profile.passwordform.update': 'パスワードの変更',
    'profile.passwordform.current': '現在のパスワード',
    'profile.passwordform.new': '新しいパスワード',
    'profile.passwordform.confirm': '新しいパスワード（確認用）',

    'profile.profile.resend': '認証メールを再送する',

    //  -------------------------------------------

    'register.form.sign_up': 'Autolikesを使ってみよう',
    'register.form.create': 'Autolikesを利用するにはアカウントを作成してください。',
    'register.form.sign_up_button': 'アカウント作成',
    'register.form.sign_in': 'ログインはこちら',
    'register.form.agree_html':
            'アカウントを作成すると、<a className="btn-link" href="/terms-of-service">利用規約</a>およびクッキーの使用を含む<a className="btn-link" href="/privacy">プライバシーポリシー</a>に同意したことになります。',
    'register.form.agree_html.ja':
            'アカウントを作成すると、<a className="btn-link" href="/terms-of-service/?locale=ja">利用規約</a>およびクッキーの使用を含む<a className="btn-link" href="/privacy/?locale=ja">プライバシーポリシー</a>に同意したことになります。',

    //  -------------------------------------------

    'resetpw.index.reset_password': 'パスワードの再設定',
    'resetpw.index.set_password': 'パスワードを設定',

    //  -------------------------------------------

    'sidebar.index.main_menu': 'メインメニュー',
    'sidebar.index.dashboard': 'ダッシュボード',
    'sidebar.index.add_account': 'アカウントを追加する',
    'sidebar.index.info': 'サポート',
    'sidebar.index.faq': 'よくある質問',
  },
});

export default ja;
