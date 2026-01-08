#!/bin/bash
# お客様の声、予約フォーム、店舗情報の中国語翻訳を追加

cd /home/user/webapp

# 4. お客様の声セクション
sed -i 's|data-ja="あなたのような旅行者の本物の体験"|data-ja="あなたのような旅行者の本物の体験" data-zh="像您一样的旅行者的真实体验"|g' src/index.tsx

# レビュー1 - Sarah M.
sed -i 's|data-ja="「小さな都市での食事に不安がありましたが、やま龍は期待を超えました。スタッフは完璧な英語で対応し、和牛は素晴らしく、個室ブースは快適でした。焼肉ピザは子供たちが大喜びのサプライズでした！」"|data-ja="「小さな都市での食事に不安がありましたが、やま龍は期待を超えました。スタッフは完璧な英語で対応し、和牛は素晴らしく、個室ブースは快適でした。焼肉ピザは子供たちが大喜びのサプライズでした！」" data-zh="\"我们对在小城市用餐感到紧张，但YAMARYU超出了所有期望。员工用完美的英语交流，和牛令人难以置信，私人包间让我们感到非常舒适。烤肉披萨是我们孩子喜爱的有趣惊喜！\""|g' src/index.tsx

# レビュー2 - Ahmed K.
sed -i 's|data-ja="「ムスリムの旅行者として、彼らが私の食事要件を尊重して対応してくれたことに感謝しています。食材について丁寧に説明し、心を込めて調理してくれました。和牛の品質は群を抜いています—大阪で食べた中で間違いなく最高の食事でした。」"|data-ja="「ムスリムの旅行者として、彼らが私の食事要件を尊重して対応してくれたことに感謝しています。食材について丁寧に説明し、心を込めて調理してくれました。和牛の品質は群を抜いています—大阪で食べた中で間違いなく最高の食事でした。」" data-zh="\"作为穆斯林旅行者，我很感激他们尊重地处理我的饮食要求。他们花时间解释配料并用心准备我的餐点。和牛品质出色——绝对是我们在大阪吃过的最好的一餐。\""|g' src/index.tsx

# レビュー3 - Jennifer & Tom
sed -i 's|data-ja="「Instagramでの予約はとても簡単で、返信もほぼ即座でした。親密な雰囲気は記念日ディナーに完璧でした。ここは家族経営で、一人ひとりのゲストを本当に大切にしていることがわかります。」"|data-ja="「Instagramでの予約はとても簡単で、返信もほぼ即座でした。親密な雰囲気は記念日ディナーに完璧でした。ここは家族経営で、一人ひとりのゲストを本当に大切にしていることがわかります。」" data-zh="\"通过Instagram预订非常简单，回复几乎是即时的。亲密的氛围非常适合我们的周年纪念晚餐。你可以看出这是一家家庭经营的餐厅，真正关心每一位客人。\""|g' src/index.tsx

# レビュー4 - Marco P.
sed -i 's|data-ja="「イタリア人なので『焼肉ピザ』には懐疑的でしたが、驚きました—石窯技術は本物で、和牛トッピングは天才的。ピザに厳しい私も感動しました。伝統的な和牛カットも驚異的でした。」"|data-ja="「イタリア人なので『焼肉ピザ』には懐疑的でしたが、驚きました—石窯技術は本物で、和牛トッピングは天才的。ピザに厳しい私も感動しました。伝統的な和牛カットも驚異的でした。」" data-zh="\"我是意大利人，所以对\'烤肉披萨\'持怀疑态度，但哇——石窑技术是真实的，和牛配料是天才之作。即使作为披萨挑剔者，我也印象深刻。传统的和牛切割也非常出色。\""|g' src/index.tsx

# レビュー5 - Linda W.
sed -i 's|data-ja="「近くに宿泊していて、この店に賭けてみました。旅行中最高の決断でした！肉の品質はレストラン供給レベル（実際に卸業者だから！）で、価格は信じられないほど良心的。この隠れた名店を見逃さないでください。」"|data-ja="「近くに宿泊していて、この店に賭けてみました。旅行中最高の決断でした！肉の品質はレストラン供給レベル（実際に卸業者だから！）で、価格は信じられないほど良心的。この隠れた名店を見逃さないでください。」" data-zh="\"我们住在附近，冒险尝试了这个地方。这是我们旅行中最好的决定！肉的品质是餐厅供应级别（因为它确实是餐厅供应商！），价格非常合理。不要错过这个隐藏的宝石。\""|g' src/index.tsx

# 5. 予約フォームセクション
sed -i 's|data-ja="このフォームに記入してください。24時間以内に予約を確認します"|data-ja="このフォームに記入してください。24時間以内に予約を確認します" data-zh="填写此表格，我们将在24小时内确认您的预订"|g' src/index.tsx
sed -i 's|data-ja="お名前 \*"|data-ja="お名前 *" data-zh="姓名 *"|g' src/index.tsx
sed -i 's|data-ja="メールアドレス \*"|data-ja="メールアドレス *" data-zh="电子邮箱 *"|g' src/index.tsx
sed -i 's|data-ja="電話番号（国番号付き） \*"|data-ja="電話番号（国番号付き） *" data-zh="电话号码（含国家代码）*"|g' src/index.tsx
sed -i 's|data-ja="希望日 \*"|data-ja="希望日 *" data-zh="首选日期 *"|g' src/index.tsx
sed -i 's|data-ja="希望時刻 \*"|data-ja="希望時刻 *" data-zh="首选时间 *"|g' src/index.tsx
sed -i 's|data-ja="人数 \*"|data-ja="人数 *" data-zh="客人人数 *"|g' src/index.tsx
sed -i 's|data-ja="食事制限やアレルギー"|data-ja="食事制限やアレルギー" data-zh="饮食限制或过敏"|g' src/index.tsx
sed -i 's|data-ja="特別なリクエストや質問"|data-ja="特別なリクエストや質問" data-zh="特殊要求或问题"|g' src/index.tsx
sed -i 's|data-ja="予約リクエストを送信"|data-ja="予約リクエストを送信" data-zh="提交预订请求"|g' src/index.tsx
sed -i 's|data-ja="24時間以内にリクエストに返信します。混雑時は時間に柔軟性が必要な場合があります。"|data-ja="24時間以内にリクエストに返信します。混雑時は時間に柔軟性が必要な場合があります。" data-zh="我们将在24小时内回复您的请求。高峰时段可能需要时间灵活性。"|g' src/index.tsx
sed -i 's|data-ja="予約リクエストを受け付けました！"|data-ja="予約リクエストを受け付けました！" data-zh="预订请求已收到！"|g' src/index.tsx
sed -i 's|data-ja="ありがとうございます！24時間以内に予約を確認します。返信メールをご確認ください。"|data-ja="ありがとうございます！24時間以内に予約を確認します。返信メールをご確認ください。" data-zh="谢谢！我们将在24小时内确认您的预订。请查看您的电子邮件以获取我们的回复。"|g' src/index.tsx

# 6. 店舗情報・アクセスセクション
sed -i 's|data-ja="大阪中心部からアクセス良好"|data-ja="大阪中心部からアクセス良好" data-zh="从大阪市中心轻松到达"|g' src/index.tsx
sed -i 's|data-ja="住所"|data-ja="住所" data-zh="地址"|g' src/index.tsx
sed -i 's|data-ja="交通"|data-ja="交通" data-zh="交通"|g' src/index.tsx
sed -i 's|data-ja="から和泉中央駅"|data-ja="から和泉中央駅" data-zh="从和泉中央站"|g' src/index.tsx
sed -i 's|data-ja="歩行15分钟"|data-ja="歩行15分钟" data-zh="步行15分钟"|g' src/index.tsx
sed -i 's|data-ja="出租车5分钟（約1,000日元）"|data-ja="出租车5分钟（約1,000日元）" data-zh="出租车5分钟（约1,000日元）"|g' src/index.tsx
sed -i 's|data-ja="有停车场"|data-ja="有停车场" data-zh="有停车场"|g' src/index.tsx
sed -i 's|data-ja="附近有合作停车场（予約時提供詳情）"|data-ja="附近有合作停车场（予約時提供詳情）" data-zh="附近有合作停车场（预订时提供详情）"|g' src/index.tsx
sed -i 's|data-ja="营业时间"|data-ja="营业时间" data-zh="营业时间"|g' src/index.tsx
sed -i 's|data-ja="午餐"|data-ja="午餐" data-zh="午餐"|g' src/index.tsx
sed -i 's|data-ja="最后点餐 14:00"|data-ja="最后点餐 14:00" data-zh="最后点餐 14:00"|g' src/index.tsx
sed -i 's|data-ja="晚餐"|data-ja="晚餐" data-zh="晚餐"|g' src/index.tsx
sed -i 's|data-ja="最后点餐 21:00"|data-ja="最后点餐 21:00" data-zh="最后点餐 21:00"|g' src/index.tsx
sed -i 's|data-ja="休息日"|data-ja="休息日" data-zh="休息日"|g' src/index.tsx
sed -i 's|data-ja="星期二（火曜日）"|data-ja="星期二（火曜日）" data-zh="星期二（火曜日）"|g' src/index.tsx
sed -i 's|data-ja="节假日营业时间可能有所変化。予約時请确认。"|data-ja="节假日营业时间可能有所変化。予約時请确认。" data-zh="节假日营业时间可能有所变化。预订时请确认。"|g' src/index.tsx
sed -i 's|data-ja="联系方式"|data-ja="联系方式" data-zh="联系方式"|g' src/index.tsx
sed -i 's|data-ja="电话："|data-ja="电话：" data-zh="电话："|g' src/index.tsx
sed -i 's|data-ja="（提供日语和基础英语）"|data-ja="（提供日语和基础英语）" data-zh="（提供日语和基础英语）"|g' src/index.tsx
sed -i 's|data-ja="官方网站："|data-ja="官方网站：" data-zh="官方网站："|g' src/index.tsx
sed -i 's|data-ja="携带物品"|data-ja="携带物品" data-zh="携带物品"|g' src/index.tsx
sed -i 's|data-ja="予約确认（如在线予約）"|data-ja="予約确认（如在线予約）" data-zh="预订确认（如在线预订）"|g' src/index.tsx
sed -i 's|data-ja="舒适的衣物（烤肉会产生香味！）"|data-ja="舒适的衣物（烤肉会产生香味！）" data-zh="舒适的衣物（烤肉会产生香味！）"|g' src/index.tsx
sed -i 's|data-ja="相机拍照（鼓励！）"|data-ja="相机拍照（鼓励！）" data-zh="相机拍照（鼓励！）"|g' src/index.tsx
sed -i 's|data-ja="无严格着装要求—休闲装即可"|data-ja="无严格着装要求—休闲装即可" data-zh="无严格着装要求——休闲装即可"|g' src/index.tsx
sed -i 's|data-ja="支付方式"|data-ja="支付方式" data-zh="支付方式"|g' src/index.tsx
sed -i 's|data-ja="接受信用卡"|data-ja="接受信用卡" data-zh="接受信用卡"|g' src/index.tsx
sed -i 's|data-ja="接受现金（日元）"|data-ja="接受现金（日元）" data-zh="接受现金（日元）"|g' src/index.tsx

# 7. フッターCTA
sed -i 's|data-ja="加入来自世界各地的旅行者，発見和泉市最好的秘密。从我们的肉铺到您的餐盘—这就是和牛本来的样子。"|data-ja="加入来自世界各地的旅行者，発見和泉市最好的秘密。从我们的肉铺到您的餐盘—这就是和牛本来的样子。" data-zh="加入来自世界各地的旅行者，发现和泉市最好的秘密。从我们的肉铺到您的餐盘——这就是和牛本来的样子。"|g' src/index.tsx
sed -i 's|data-ja="欢迎英文予約"|data-ja="欢迎英文予約" data-zh="欢迎英文预订"|g' src/index.tsx
sed -i 's|data-ja="可应对饮食限制"|data-ja="可应对饮食限制" data-zh="可应对饮食限制"|g' src/index.tsx
sed -i 's|data-ja="家庭友好 & 情侣友好"|data-ja="家庭友好 & 情侣友好" data-zh="家庭友好 & 情侣友好"|g' src/index.tsx
sed -i 's|data-ja="小而用心的团队"|data-ja="小而用心的团队" data-zh="小而用心的团队"|g' src/index.tsx

# 8. フッターリンク
sed -i 's|data-ja="予約表格"|data-ja="予約表格" data-zh="预订表格"|g' src/index.tsx
sed -i 's|data-ja="過敏信息"|data-ja="過敏信息" data-zh="过敏信息"|g' src/index.tsx

# 9. その他の詳細セクション
sed -i 's|data-ja="多年来，我们一直向大阪顶级餐厅供应优质和牛。现在，您可以在我们自己的烤肉店品尝到专业客户信赖的同等卓越品质。"|data-ja="多年来，我们一直向大阪顶级餐厅供应优质和牛。现在，您可以在我们自己的烤肉店品尝到专业客户信赖的同等卓越品质。" data-zh="多年来，我们一直向大阪顶级餐厅供应优质和牛。现在，您可以在我们自己的烤肉店品尝到专业客户信赖的同等卓越品质。"|g' src/index.tsx
sed -i 's|data-ja="我们不仅仅是一家餐厅，更是和牛专家。每天早晨，我们的专业屠夫精选最优质的部位。您今天享用的和牛，都是由致力于了解牛肉品质的专业人士精心挑选的。"|data-ja="我们不仅仅是一家餐厅，更是和牛专家。每天早晨，我们的专业屠夫精选最优质的部位。您今天享用的和牛，都是由致力于了解牛肉品质的专业人士精心挑选的。" data-zh="我们不仅仅是一家餐厅，更是和牛专家。每天早晨，我们的专业屠夫精选最优质的部位。您今天享用的和牛，都是由致力于了解牛肉品质的专业人士精心挑选的。"|g' src/index.tsx
sed -i 's|data-ja="在融合现代酒吧美学与传统日式温馨的半私密空间享用美食。非常适合情侣、家庭或不想被人群打扰的小团体。"|data-ja="在融合现代酒吧美学与传统日式温馨的半私密空间享用美食。非常适合情侣、家庭或不想被人群打扰的小团体。" data-zh="在融合现代酒吧美学与传统日式温馨的半私密空间享用美食。非常适合情侣、家庭或不想被人群打扰的小团体。"|g' src/index.tsx
sed -i 's|data-ja="仅在YAMARYU：我们的招牌石烤烤肉披萨将优质和牛与意式工艺完美结合。这是一种令成人和儿童都喜爱的意外融合。"|data-ja="仅在YAMARYU：我们的招牌石烤烤肉披萨将优质和牛与意式工艺完美结合。这是一种令成人和儿童都喜爱的意外融合。" data-zh="仅在YAMARYU：我们的招牌石烤烤肉披萨将优质和牛与意式工艺完美结合。这是一种令成人和儿童都喜爱的意外融合。"|g' src/index.tsx
sed -i 's|data-ja="小餐厅，大用心。仅有12名员工，我们提供大型连锁店无法比拟的个性化服务。可通过Instagram或在线表格进行英文予約。"|data-ja="小餐厅，大用心。仅有12名员工，我们提供大型连锁店无法比拟的个性化服务。可通过Instagram或在线表格进行英文予約。" data-zh="小餐厅，大用心。仅有12名员工，我们提供大型连锁店无法比拟的个性化服务。可通过Instagram或在线表格进行英文预订。"|g' src/index.tsx

# 10. 予約CTAセクション詳細
sed -i 's|data-ja="準備预订？两种简单方式"|data-ja="準備预订？两种简单方式" data-zh="准备预订？两种简单方式"|g' src/index.tsx
sed -i 's|data-ja="Instagram私信"|data-ja="Instagram私信" data-zh="Instagram私信"|g' src/index.tsx
sed -i 's|data-ja="発送私信至 @yamaryu_bar"|data-ja="発送私信至 @yamaryu_bar" data-zh="发送私信至 @yamaryu_bar"|g' src/index.tsx
sed -i 's|data-ja="即时回复（通常1小时内）"|data-ja="即时回复（通常1小时内）" data-zh="即时回复（通常1小时内）"|g' src/index.tsx
sed -i 's|data-ja="轻松分享照片和提问"|data-ja="轻松分享照片和提问" data-zh="轻松分享照片和提问"|g' src/index.tsx
sed -i 's|data-ja="友好、轻松的交流"|data-ja="友好、轻松的交流" data-zh="友好、轻松的交流"|g' src/index.tsx
sed -i 's|data-ja="在Instagram上留言"|data-ja="在Instagram上留言" data-zh="在Instagram上留言"|g' src/index.tsx
sed -i 's|data-ja="英文予約表格"|data-ja="英文予約表格" data-zh="英文预订表格"|g' src/index.tsx
sed -i 's|data-ja="填写我们简单的在线表格"|data-ja="填写我们简单的在线表格" data-zh="填写我们简单的在线表格"|g' src/index.tsx
sed -i 's|data-ja="全天候开放"|data-ja="全天候开放" data-zh="全天候开放"|g' src/index.tsx
sed -i 's|data-ja="无需日语"|data-ja="无需日语" data-zh="无需日语"|g' src/index.tsx
sed -i 's|data-ja="24小时内确认"|data-ja="24小时内确认" data-zh="24小时内确认"|g' src/index.tsx

echo "✅ Phase 2: お客様の声、予約フォーム、店舗情報の中国語翻訳を追加完了"
