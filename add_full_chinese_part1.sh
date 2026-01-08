#!/bin/bash
# 全テキストに中国語簡体字を追加するスクリプト

cd /home/user/webapp

# バックアップ
cp src/index.tsx src/index.tsx.before_full_zh

# ファイルに中国語を追加（sedで一括置換）

# ===== Hero Section =====
sed -i 's|data-ja="大阪最高級の和牛体験">|data-ja="大阪最高級の和牛体験" data-zh="体验大阪顶级和牛">|g' src/index.tsx
sed -i 's|data-ja="温かく洗練された空間で">|data-ja="温かく洗練された空間で" data-zh="在温馨优雅的空间">|g' src/index.tsx
sed -i 's|data-ja="精肉卸直営 〜卸からあなたのテーブルへ〜">|data-ja="精肉卸直営 〜卸からあなたのテーブルへ〜" data-zh="从我们的肉铺直达您的餐桌">|g' src/index.tsx
sed -i 's|data-ja="和泉市の本格和牛焼肉">|data-ja="和泉市の本格和牛焼肉" data-zh="和泉市正宗日式和牛烤肉">|g' src/index.tsx

# ===== Trust Section =====
sed -i 's|data-ja="長年にわたり、大阪の一流レストランに最高級和牛を提供してきました。今、プロが信頼する品質を、当店で直接お楽しみいただけます。">|data-ja="長年にわたり、大阪の一流レストランに最高級和牛を提供してきました。今、プロが信頼する品質を、当店で直接お楽しみいただけます。" data-zh="多年来，我们一直向大阪顶级餐厅供应优质和牛。现在，您可以在我们自己的烤肉店品尝到专业客户信赖的同等卓越品质。">|g' src/index.tsx

# ===== Why Choose Us =====
sed -i 's|data-ja="精肉卸直営の強み">|data-ja="精肉卸直営の強み" data-zh="肉铺直营的优势">|g' src/index.tsx
sed -i 's|data-ja="当店は単なるレストランではなく、和牛のスペシャリストです。毎朝、熟練の肉職人が最高の部位を厳選。今日召し上がる肉は、牛肉の品質を極めたプロフェッショナルが選んだものです。">|data-ja="当店は単なるレストランではなく、和牛のスペシャリストです。毎朝、熟練の肉職人が最高の部位を厳選。今日召し上がる肉は、牛肉の品質を極めたプロフェッショナルが選んだものです。" data-zh="我们不仅仅是一家餐厅，更是和牛专家。每天早晨，我们的专业屠夫精选最优质的部位。您今天享用的和牛，都是由致力于了解牛肉品质的专业人士精心挑选的。">|g' src/index.tsx
sed -i 's|data-ja="個室風プライベート空間">|data-ja="個室風プライベート空間" data-zh="包间式私密空间">|g' src/index.tsx
sed -i 's|data-ja="モダンなバルの美学と伝統的な日本の温かさが融合した、半個室空間でお食事をお楽しみください。カップル、ファミリー、少人数グループに最適です。">|data-ja="モダンなバルの美学と伝統的な日本の温かさが融合した、半個室空間でお食事をお楽しみください。カップル、ファミリー、少人数グループに最適です。" data-zh="在融合现代酒吧美学与传统日式温馨的半私密空间享用美食。非常适合情侣、家庭或小团体。">|g' src/index.tsx
sed -i 's|data-ja="焼肉×イタリアン">|data-ja="焼肉×イタリアン" data-zh="烤肉遇见意式">|g' src/index.tsx
sed -i 's|data-ja="やま龍限定：石窯で焼く焼肉ピザは、最高級和牛とイタリアの職人技の融合。大人も子供も喜ぶ、予想を超えた美味しさです。">|data-ja="やま龍限定：石窯で焼く焼肉ピザは、最高級和牛とイタリアの職人技の融合。大人も子供も喜ぶ、予想を超えた美味しさです。" data-zh="YAMARYU独家：我们的招牌石烤烤肉披萨将优质和牛与意式工艺完美结合。这是一种令成人和儿童都喜爱的意外美味。">|g' src/index.tsx
sed -i 's|data-ja="あなたの言葉で対応">|data-ja="あなたの言葉で対応" data-zh="用您的语言服务">|g' src/index.tsx
sed -i 's|data-ja="小規模店ならではの心からのおもてなし。スタッフ12名だからこそできる、きめ細かい対応。英語予約はInstagramまたはオンラインフォームで承ります。">|data-ja="小規模店ならではの心からのおもてなし。スタッフ12名だからこそできる、きめ細かい対応。英語予約はInstagramまたはオンラインフォームで承ります。" data-zh="小餐厅，大用心。仅有12名员工，我们提供大型连锁店无法比拟的个性化服务。可通过Instagram或在线表格进行英文预订。">|g' src/index.tsx

# ===== Reservation Section =====
sed -i 's|data-ja="Instagram DM">|data-ja="Instagram DM" data-zh="Instagram私信">|g' src/index.tsx
sed -i 's|data-ja="@yamaryu_barにDMを送信">|data-ja="@yamaryu_barにDMを送信" data-zh="发送私信至@yamaryu_bar">|g' src/index.tsx
sed -i 's|data-ja="即座に返信（通常1時間以内）">|data-ja="即座に返信（通常1時間以内）" data-zh="即时回复（通常1小时内）">|g' src/index.tsx
sed -i 's|data-ja="写真や質問を簡単に共有">|data-ja="写真や質問を簡単に共有" data-zh="轻松分享照片和提问">|g' src/index.tsx
sed -i 's|data-ja="フレンドリーでカジュアルなやり取り">|data-ja="フレンドリーでカジュアルなやり取り" data-zh="友好、轻松的交流">|g' src/index.tsx
sed -i 's|data-ja="Instagramでメッセージ">|data-ja="Instagramでメッセージ" data-zh="在Instagram上留言">|g' src/index.tsx
sed -i 's|data-ja="簡単なオンラインフォームに記入">|data-ja="簡単なオンラインフォームに記入" data-zh="填写简单的在线表格">|g' src/index.tsx

# ===== Menu Section =====
sed -i 's|data-ja="お客様の喜びのために厳選">|data-ja="お客様の喜びのために厳選" data-zh="为您精心挑选">|g' src/index.tsx
sed -i 's|data-ja="人気No.1">|data-ja="人気No.1" data-zh="最受欢迎">|g' src/index.tsx
sed -i 's|data-ja="やま龍 上撰セット（3〜4名様用）">|data-ja="やま龍 上撰セット（3〜4名様用）" data-zh="YAMARYU特选和牛套餐（3-4人份）">|g' src/index.tsx
sed -i 's|data-ja="（税込・3〜4名様用）">|data-ja="（税込・3〜4名様用）" data-zh="（含税，3-4人份）">|g' src/index.tsx
sed -i 's|data-ja="その日の最高級和牛を、肉職人が厳選。美しく盛り付けられた旬の焼き野菜とともに。このボリューム満点のセットには以下が含まれます：">|data-ja="その日の最高級和牛を、肉職人が厳選。美しく盛り付けられた旬の焼き野菜とともに。このボリューム満点のセットには以下が含まれます：" data-zh="我们的屠夫精选当日最优质的和牛部位，搭配精美呈现的时令烤蔬菜。这份丰盛的套餐包括：">|g' src/index.tsx
sed -i 's|data-ja="上タン">|data-ja="上タン" data-zh="特选牛舌">|g' src/index.tsx
sed -i 's|data-ja="濃厚で柔らか、口の中でとろける">|data-ja="濃厚で柔らか、口の中でとろける" data-zh="浓郁、柔嫩、入口即化">|g' src/index.tsx
sed -i 's|data-ja="上ロース">|data-ja="上ロース" data-zh="特选里脊">|g' src/index.tsx
sed -i 's|data-ja="完璧な霜降りで最高の風味">|data-ja="完璧な霜降りで最高の風味" data-zh="完美的大理石纹理，风味十足">|g' src/index.tsx
sed -i 's|data-ja="熟成上はらみ">|data-ja="熟成上はらみ" data-zh="熟成特选横膈膜">|g' src/index.tsx
sed -i 's|data-ja="当店自慢の熟成肉">|data-ja="当店自慢の熟成肉" data-zh="我们的招牌熟成肉">|g' src/index.tsx
sed -i 's|data-ja="和牛盛り合わせ">|data-ja="和牛盛り合わせ" data-zh="精选和牛拼盘">|g' src/index.tsx
sed -i 's|data-ja="肉職人が毎日厳選">|data-ja="肉職人が毎日厳選" data-zh="每日由专业屠夫精选">|g' src/index.tsx
sed -i 's|data-ja="旬の焼き野菜">|data-ja="旬の焼き野菜" data-zh="时令烤蔬菜">|g' src/index.tsx
sed -i 's|data-ja="シェアして和牛の多彩な味わいを発見するのに最適です。">|data-ja="シェアして和牛の多彩な味わいを発見するのに最適です。" data-zh="非常适合分享，探索和牛的全方位风味。">|g' src/index.tsx
sed -i 's|data-ja="ハーフセット（1.5〜2名様用）">|data-ja="ハーフセット（1.5〜2名様用）" data-zh="半份套餐（1.5-2人份）">|g' src/index.tsx
sed -i 's|data-ja="（税込）">|data-ja="（税込）" data-zh="（含税）">|g' src/index.tsx
sed -i 's|data-ja="フルセットと同じ品質を、2名様にちょうど良い量で。カップルや、過度な注文を避けたい方に最適です。">|data-ja="フルセットと同じ品質を、2名様にちょうど良い量で。カップルや、過度な注文を避けたい方に最適です。" data-zh="与全份套餐品质相同，完美的双人份量。非常适合情侣或希望不过量点餐的客人。">|g' src/index.tsx
sed -i 's|data-ja="シェフのおすすめ">|data-ja="シェフのおすすめ" data-zh="主厨推荐">|g' src/index.tsx
sed -i 's|data-ja="特選厚切りタン">|data-ja="特選厚切りタン" data-zh="特厚切特选牛舌">|g' src/index.tsx
sed -i 's|data-ja="本物の肉好きのために：当店自慢の特選厚切りタンは、まさに感動の一品。炭火で焼き上げることで外はカリッと、中はジューシーで柔らか。なぜタンが日本の焼肉文化で珍味とされているのかを体感できます。">|data-ja="本物の肉好きのために：当店自慢の特選厚切りタンは、まさに感動の一品。炭火で焼き上げることで外はカリッと、中はジューシーで柔らか。なぜタンが日本の焼肉文化で珍味とされているのかを体感できます。" data-zh="献给真正的肉食爱好者：我们的招牌特厚切牛舌令人惊艳。炭火烤制，外脆内嫩多汁，完美展现了为何牛舌在日式烤肉文化中被视为珍馐。">|g' src/index.tsx
sed -i 's|data-ja="おすすめの焼き方：">|data-ja="おすすめの焼き方：" data-zh="推荐烹饪方式：">|g' src/index.tsx
sed -i 's|data-ja="ミディアムレアで最高の柔らかさ">|data-ja="ミディアムレアで最高の柔らかさ" data-zh="五分熟最为柔嫩">|g' src/index.tsx
sed -i 's|data-ja="量より質を重視するお客様に人気です。">|data-ja="量より質を重視するお客様に人気です。" data-zh="深受注重品质胜过数量的客人喜爱。">|g' src/index.tsx
sed -i 's|data-ja="ファミリーに人気">|data-ja="ファミリーに人気" data-zh="家庭最爱">|g' src/index.tsx
sed -i 's|data-ja="焼肉ピザ ビアンコ">|data-ja="焼肉ピザ ビアンコ" data-zh="石烤烤肉白披萨">|g' src/index.tsx
sed -i 's|data-ja="やま龍オリジナル：最高級和牛とイタリアの石窯ピザの出会い。薄くてパリパリのクラストに、柔らかな牛肉、新鮮なチーズ、香り高いハーブをトッピング。伝統的な石窯で完璧に焼き上げます。">|data-ja="やま龍オリジナル：最高級和牛とイタリアの石窯ピザの出会い。薄くてパリパリのクラストに、柔らかな牛肉、新鮮なチーズ、香り高いハーブをトッピング。伝統的な石窯で完璧に焼き上げます。" data-zh="YAMARYU原创：优质和牛遇见意式石窑披萨。薄脆的饼底，配上我们柔嫩的牛肉、新鲜奶酪和芳香草本。在传统石窑中烤制至完美。">|g' src/index.tsx
sed -i 's|data-ja="お客様が愛する理由：">|data-ja="お客様が愛する理由：" data-zh="客人喜爱的理由：">|g' src/index.tsx
sed -i 's|data-ja="お子様が大好き（ファミリーに最適！）">|data-ja="お子様が大好き（ファミリーに最適！）" data-zh="孩子们超爱（家庭聚餐首选！）">|g' src/index.tsx
sed -i 's|data-ja="バラエティを求める方に軽めの選択肢">|data-ja="バラエティを求める方に軽めの選択肢" data-zh="想要多样化的轻量选择">|g' src/index.tsx
sed -i 's|data-ja="他では味わえないユニークな融合">|data-ja="他では味わえないユニークな融合" data-zh="独一无二的融合，别处难觅">|g' src/index.tsx
sed -i 's|data-ja="ワインやビールに完璧にマッチ">|data-ja="ワインやビールに完璧にマッチ" data-zh="搭配葡萄酒或啤酒完美">|g' src/index.tsx
sed -i 's|data-ja="「焼肉とピザが美味しい赤ちゃんを産んだみたい」- お客様の声">|data-ja="「焼肉とピザが美味しい赤ちゃんを産んだみたい」- お客様の声" data-zh="\"就像烤肉和披萨生了个美味宝宝\" - 我们的客人">|g' src/index.tsx
sed -i 's|data-ja="当店自慢の熟成肉—柔らか、風味豊か、忘れられない">|data-ja="当店自慢の熟成肉—柔らか、風味豊か、忘れられない" data-zh="我们的招牌熟成肉——柔嫩、风味浓郁、难以忘怀">|g' src/index.tsx
sed -i 's|data-ja="和牛赤身の炙り">|data-ja="和牛赤身の炙り" data-zh="和牛赤身炙烤">|g' src/index.tsx
sed -i 's|data-ja="軽く炙った和牛をカルパッチョ風で">|data-ja="軽く炙った和牛をカルパッチョ風で" data-zh="轻炙和牛，卡帕乔式呈现">|g' src/index.tsx
sed -i 's|data-ja="自家製デザート">|data-ja="自家製デザート" data-zh="自制甜点">|g' src/index.tsx
sed -i 's|data-ja="毎日店内で手作りする甘いフィニッシュ">|data-ja="毎日店内で手作りする甘いフィニッシュ" data-zh="每日店内手工制作的甜蜜结尾">|g' src/index.tsx
sed -i 's|data-ja="何を注文すればいいかわからない？スタッフがお好みに合わせておすすめします。予約時にお気軽にお尋ねください！">|data-ja="何を注文すればいいかわからない？スタッフがお好みに合わせておすすめします。予約時にお気軽にお尋ねください！" data-zh="不确定点什么？我们的员工很乐意根据您的喜好推荐。预订时随时询问！">|g' src/index.tsx

# ===== Dietary Section =====
sed -i 's|data-ja="お客様の安全と快適さを大切にします">|data-ja="お客様の安全と快適さを大切にします" data-zh="您的安全与舒适至关重要">|g' src/index.tsx
sed -i 's|data-ja="やま龍では、食事制限や宗教的な要件に関わらず、すべての人が最高の和牛を楽しむべきだと信じています。少人数のチームだからこそ、心を込めて丁寧に対応いたします。">|data-ja="やま龍では、食事制限や宗教的な要件に関わらず、すべての人が最高の和牛を楽しむべきだと信じています。少人数のチームだからこそ、心を込めて丁寧に対応いたします。" data-zh="在YAMARYU，我们相信每个人都应该享受卓越的和牛——无论饮食限制或宗教要求如何。我们的小团队以用心和尊重满足您的需求为荣。">|g' src/index.tsx
sed -i 's|data-ja="アレルギー対応オプション">|data-ja="アレルギー対応オプション" data-zh="过敏友好选项">|g' src/index.tsx
sed -i 's|data-ja="食物アレルギーを真剣に受け止めています。予約時にアレルギーをお知らせいただければ、専用の調理器具を使用し、交差汚染に細心の注意を払って調理いたします。">|data-ja="食物アレルギーを真剣に受け止めています。予約時にアレルギーをお知らせいただければ、専用の調理器具を使用し、交差汚染に細心の注意を払って調理いたします。" data-zh="我们认真对待食物过敏。预订时请告知任何过敏信息，我们的厨师将使用专用器具并仔细注意交叉污染来准备您的餐点。">|g' src/index.tsx
sed -i 's|data-ja="対応可能な主なアレルゲン：">|data-ja="対応可能な主なアレルゲン：" data-zh="我们可应对的常见过敏原：">|g' src/index.tsx
sed -i 's|data-ja="注意：">|data-ja="注意：" data-zh="注意：">|g' src/index.tsx
sed -i 's|data-ja="適切な準備のため、訪問の少なくとも24時間前にアレルギー詳細をお知らせください。">|data-ja="適切な準備のため、訪問の少なくとも24時間前にアレルギー詳細をお知らせください。" data-zh="请至少在到访前24小时提供过敏详情，以确保妥善准备。">|g' src/index.tsx
sed -i 's|data-ja="ムスリムフレンドリー対応">|data-ja="ムスリムフレンドリー対応" data-zh="穆斯林友好考虑">|g' src/index.tsx
sed -i 's|data-ja="認証ハラールレストランではありませんが、宗教的な食事規則を尊重し、可能な限り対応いたします。">|data-ja="認証ハラールレストランではありませんが、宗教的な食事規則を尊重し、可能な限り対応いたします。" data-zh="虽然我们不是经认证的清真餐厅，但我们尊重宗教饮食法规，并将尽力满足您的需求。">|g' src/index.tsx
sed -i 's|data-ja="対応可能なこと：">|data-ja="対応可能なこと：" data-zh="我们可以：">|g' src/index.tsx
sed -i 's|data-ja="専用調理器具で調理">|data-ja="専用調理器具で調理" data-zh="使用专用炊具准备餐点">|g' src/index.tsx
sed -i 's|data-ja="全料理の原材料リスト提供">|data-ja="全料理の原材料リスト提供" data-zh="提供所有菜品的配料清单">|g' src/index.tsx
sed -i 's|data-ja="代替メニューの提案">|data-ja="代替メニューの提案" data-zh="提供替代菜单选项">|g' src/index.tsx
sed -i 's|data-ja="シェフとの事前相談">|data-ja="シェフとの事前相談" data-zh="安排与厨师的咨询">|g' src/index.tsx
sed -i 's|data-ja="ご相談歓迎：予約時に具体的なご要望をお聞かせください。">|data-ja="ご相談歓迎：予約時に具体的なご要望をお聞かせください。" data-zh="欢迎讨论：预订时联系我们讨论您的具体要求。">|g' src/index.tsx
sed -i 's|data-ja="ベジタリアン・特別食">|data-ja="ベジタリアン・特別食" data-zh="素食与特殊饮食">|g' src/index.tsx
sed -i 's|data-ja="焼肉は伝統的に肉中心ですが、様々な食事嗜好に対応するオプションをご用意しています：">|data-ja="焼肉は伝統的に肉中心ですが、様々な食事嗜好に対応するオプションをご用意しています：" data-zh="虽然烤肉传统上以肉类为主，但我们为各种饮食偏好提供选项：">|g' src/index.tsx
sed -i 's|data-ja="焼き野菜盛り合わせ（新鮮な旬野菜）">|data-ja="焼き野菜盛り合わせ（新鮮な旬野菜）" data-zh="烤蔬菜拼盘（新鲜时令蔬菜）">|g' src/index.tsx
sed -i 's|data-ja="動物性食品不使用の米料理">|data-ja="動物性食品不使用の米料理" data-zh="无动物制品的米饭菜肴">|g' src/index.tsx
sed -i 's|data-ja="グルテンフリー醤油代替品">|data-ja="グルテンフリー醤油代替品" data-zh="无麸质酱油替代品">|g' src/index.tsx
sed -i 's|data-ja="カスタム野菜ベースサイド">|data-ja="カスタム野菜ベースサイド" data-zh="定制蔬菜配菜">|g' src/index.tsx
sed -i 's|data-ja="予約時にご要望をお知らせください。美味しい選択肢をご用意いたします。">|data-ja="予約時にご要望をお知らせください。美味しい選択肢をご用意いたします。" data-zh="预订时告知您的要求——我们将确保您有美味的选项可享用。">|g' src/index.tsx
sed -i 's|data-ja="食材や調理方法について具体的なご質問がありますか？">|data-ja="食材や調理方法について具体的なご質問がありますか？" data-zh="对配料或准备有具体疑问？">|g' src/index.tsx
sed -i 's|data-ja="Instagramまたはオンラインフォームでお問い合わせください。喜んでお手伝いいたします！">|data-ja="Instagramまたはオンラインフォームでお問い合わせください。喜んでお手伝いいたします！" data-zh="通过Instagram或预订表格联系我们——我们随时为您服务！">|g' src/index.tsx
sed -i 's|data-ja="今すぐお問い合わせ">|data-ja="今すぐお問い合わせ" data-zh="立即联系我们">|g' src/index.tsx

echo "✅ Step 1: メニューと食事制限セクション完了"
