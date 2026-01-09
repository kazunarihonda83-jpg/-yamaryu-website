import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/images/*', serveStatic({ root: './public' }))
app.use('/css/*', serveStatic({ root: './public' }))
app.use('/js/*', serveStatic({ root: './public' }))

// 予約フォーム送信API
app.post('/api/reservation', async (c) => {
  const data = await c.req.json()
  
  // TODO: 実際のメール送信やデータベース保存処理
  // ここでは受信したデータをログに記録するだけ
  console.log('Reservation received:', data)
  
  return c.json({ 
    success: true, 
    message: 'Reservation request received. We will contact you soon!' 
  })
})

// メインページ
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YAKINIKU BAR YAMARYU | Premium Wagyu Experience in Osaka</title>
    <meta name="description" content="Experience Osaka's finest wagyu at YAKINIKU BAR YAMARYU. Direct from our butcher shop to your table. English reservations welcome.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-red: #8B0000;
            --primary-gold: #D4AF37;
            --text-dark: #2C2C2C;
            --bg-light: #FFF8F0;
        }
        
        body {
            font-family: 'Noto Sans JP', 'Noto Sans SC', sans-serif;
            color: var(--text-dark);
        }
        
        .font-display {
            font-family: 'Playfair Display', serif;
        }
        
        .hero-gradient {
            background: linear-gradient(135deg, rgba(139,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
        }
        
        .btn-primary {
            background: var(--primary-gold);
            color: #000;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 700;
            transition: all 0.3s ease;
            display: inline-block;
            text-decoration: none;
        }
        
        .btn-primary:hover {
            background: #C4A037;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }
        
        .btn-instagram {
            background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
            color: white;
        }
        
        .btn-instagram:hover {
            opacity: 0.9;
            color: white;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--primary-red);
        }
        
        .card {
            background: white;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        .floating-cta {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .lang-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .lang-switch:hover {
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            .section-title {
                font-size: 1.8rem;
            }
            
            .floating-cta {
                bottom: 10px;
                right: 10px;
            }
        }
    </style>
</head>
<body class="bg-gray-50">

    <!-- Language Switcher -->
    <div class="lang-switch" onclick="toggleLanguage()">
        <i class="fas fa-language mr-2"></i>
        <span id="langText">EN</span>
    </div>

    <!-- Floating CTA -->
    <div class="floating-cta">
        <button onclick="scrollToReservation()" class="btn-primary shadow-lg">
            <i class="fas fa-calendar-check mr-2"></i>
            <span data-en="Reserve Now" data-ja="予約する" data-zh="进行预订">Reserve Now</span>
        </button>
    </div>

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center text-white" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero-main.jpg') center/cover;">
        <div class="text-center px-4 max-w-4xl mx-auto">
            <h1 class="font-display text-5xl md:text-7xl mb-6" data-en="Experience Osaka's Finest Wagyu" data-ja="大阪最高級の和牛体験" data-zh="体验大阪顶级和牛">
                Experience Osaka's Finest Wagyu
            </h1>
            <h2 class="text-2xl md:text-3xl mb-4 text-yellow-300" data-en="In an Intimate, Welcoming Space" data-ja="温かく洗練された空間で" data-zh="在温馨优雅的空间">
                In an Intimate, Welcoming Space
            </h2>
            <p class="text-xl mb-4" data-en="Direct from Our Butcher Shop to Your Table" data-ja="精肉卸直営 〜卸からあなたのテーブルへ〜" data-zh="从我们的肉铺直达您的餐桌">
                Direct from Our Butcher Shop to Your Table
            </p>
            <p class="text-lg mb-8 opacity-90" data-en="Premium Japanese Wagyu Yakiniku in Izumi City" data-ja="和泉市の本格和牛焼肉" data-zh="和泉市正宗日式和牛烤肉">
                Premium Japanese Wagyu Yakiniku in Izumi City
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
                <div class="flex items-center"><i class="fas fa-check-circle mr-3 text-yellow-300"></i><span data-en="English Reservations Welcome" data-ja="英語予約対応" data-zh="欢迎英文预订">English Reservations Welcome</span></div>
                <div class="flex items-center"><i class="fas fa-check-circle mr-3 text-yellow-300"></i><span data-en="Dietary Restrictions Accommodated" data-ja="食事制限対応可能" data-zh="可应对饮食限制">Dietary Restrictions Accommodated</span></div>
                <div class="flex items-center"><i class="fas fa-check-circle mr-3 text-yellow-300"></i><span data-en="Private Booth-Style Seating" data-ja="個室風プライベート席" data-zh="包间式私密座位">Private Booth-Style Seating</span></div>
                <div class="flex items-center"><i class="fas fa-check-circle mr-3 text-yellow-300"></i><span data-en="15 min from Izumi-chuo Station" data-ja="和泉中央駅より徒歩15分" data-zh="距和泉中央站步行15分钟">15 min from Izumi-chuo Station</span></div>
            </div>
            
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <a href="https://www.instagram.com/yamaryu_bar/" target="_blank" class="btn-primary btn-instagram">
                    <i class="fab fa-instagram mr-2"></i>
                    <span data-en="Reserve via Instagram" data-ja="Instagramで予約">Reserve via Instagram</span>
                    <br><small data-en="Instant Response" data-ja="即座に対応" data-zh="即时回复">Instant Response</small>
                </a>
                <a href="#reservation-form" class="btn-primary">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    <span data-en="English Reservation Form" data-ja="予約フォーム">English Reservation Form</span>
                    <br><small data-en="No Japanese Required" data-ja="日本語不要" data-zh="无需日语">No Japanese Required</small>
                </a>
            </div>
        </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="Trusted by Local Restaurants & Hotels" data-ja="地元のレストランやホテルから信頼されています" data-zh="深受当地餐厅和酒店信赖">
                Trusted by Local Restaurants & Hotels
            </h2>
            <p class="text-center text-lg mb-12 max-w-3xl mx-auto" data-en="For years, we've supplied premium wagyu to Osaka's finest dining establishments. Now, you can experience the same exceptional quality our professional clients trust—at our own yakiniku bar." data-ja="長年にわたり、大阪の一流レストランに最高級和牛を提供してきました。今、プロが信頼する品質を、当店で直接お楽しみいただけます。" data-zh="多年来，我们一直向大阪顶级餐厅供应优质和牛。现在，您可以在我们自己的烤肉店品尝到专业客户信赖的同等卓越品质。">
                For years, we've supplied premium wagyu to Osaka's finest dining establishments. Now, you can experience the same exceptional quality our professional clients trust—at our own yakiniku bar.
            </p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-5xl mb-2">🏆</div>
                    <h3 class="font-bold text-xl mb-2" data-en="Direct Butcher Shop" data-ja="精肉卸直営" data-zh="肉铺直营">Direct Butcher Shop</h3>
                    <p class="text-sm" data-en="No middlemen" data-ja="中間業者なし" data-zh="无中间商">No middlemen</p>
                </div>
                <div>
                    <div class="text-5xl mb-2">👨‍🍳</div>
                    <h3 class="font-bold text-xl mb-2" data-en="Expert Selection" data-ja="目利きの選定" data-zh="专家精选">Expert Selection</h3>
                    <p class="text-sm" data-en="Daily quality check" data-ja="毎日の品質チェック" data-zh="每日质检">Daily quality check</p>
                </div>
                <div>
                    <div class="text-5xl mb-2">⭐</div>
                    <h3 class="font-bold text-xl mb-2" data-en="Highly Rated" data-ja="高評価" data-zh="高度评价">Highly Rated</h3>
                    <p class="text-sm" data-en="Local reviews" data-ja="地元の口コミ" data-zh="本地评论">Local reviews</p>
                </div>
                <div>
                    <div class="text-5xl mb-2">🌏</div>
                    <h3 class="font-bold text-xl mb-2" data-en="International Guests" data-ja="海外ゲスト歓迎" data-zh="国际客人">International Guests</h3>
                    <p class="text-sm" data-en="Welcome!" data-ja="大歓迎！" data-zh="欢迎！">Welcome!</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="Why YAMARYU is Different" data-ja="やま龍が選ばれる理由" data-zh="为什么选择YAMARYU">
                Why YAMARYU is Different
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div class="card text-center">
                    <div class="text-5xl mb-4">🥩</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Direct from Our Butcher Shop" data-ja="精肉卸直営の強み" data-zh="肉铺直营的优势">Direct from Our Butcher Shop</h3>
                    <p class="text-sm" data-en="We're not just a restaurant—we're wagyu specialists. Every morning, our expert butchers select the finest cuts. What you eat today was chosen by professionals who've dedicated their lives to understanding beef quality." data-ja="当店は単なるレストランではなく、和牛のスペシャリストです。毎朝、熟練の肉職人が最高の部位を厳選。今日召し上がる肉は、牛肉の品質を極めたプロフェッショナルが選んだものです。" data-zh="我们不仅仅是一家餐厅，更是和牛专家。每天早晨，我们的专业屠夫精选最优质的部位。您今天享用的和牛，都是由致力于了解牛肉品质的专业人士精心挑选的。">
                        We're not just a restaurant—we're wagyu specialists. Every morning, our expert butchers select the finest cuts. What you eat today was chosen by professionals who've dedicated their lives to understanding beef quality.
                    </p>
                </div>
                
                <div class="card text-center">
                    <div class="text-5xl mb-4">🏮</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Private Booth-Style Seating" data-ja="個室風プライベート空間" data-zh="包间式私密空间">Private Booth-Style Seating</h3>
                    <p class="text-sm" data-en="Enjoy your meal in semi-private spaces that blend modern bar aesthetics with traditional Japanese warmth. Perfect for couples, families, or small groups who want to relax without worrying about crowds." data-ja="モダンなバルの美学と伝統的な日本の温かさが融合した、半個室空間でお食事をお楽しみください。カップル、ファミリー、少人数グループに最適です。" data-zh="在融合现代酒吧美学与传统日式温馨的半私密空间享用美食。非常适合情侣、家庭或小团体。">
                        Enjoy your meal in semi-private spaces that blend modern bar aesthetics with traditional Japanese warmth. Perfect for couples, families, or small groups who want to relax without worrying about crowds.
                    </p>
                </div>
                
                <div class="card text-center">
                    <div class="text-5xl mb-4">🍕</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Yakiniku Meets Italian" data-ja="焼肉×イタリアン" data-zh="烤肉遇见意式">Yakiniku Meets Italian</h3>
                    <p class="text-sm" data-en="Only at YAMARYU: Our signature Stone-Baked Yakiniku Pizza combines premium wagyu with Italian craftsmanship. It's an unexpected fusion that delights both adults and children alike." data-ja="やま龍限定：石窯で焼く焼肉ピザは、最高級和牛とイタリアの職人技の融合。大人も子供も喜ぶ、予想を超えた美味しさです。" data-zh="YAMARYU独家：我们的招牌石烤烤肉披萨将优质和牛与意式工艺完美结合。这是一种令成人和儿童都喜爱的意外美味。">
                        Only at YAMARYU: Our signature Stone-Baked Yakiniku Pizza combines premium wagyu with Italian craftsmanship. It's an unexpected fusion that delights both adults and children alike.
                    </p>
                </div>
                
                <div class="card text-center">
                    <div class="text-5xl mb-4">💬</div>
                    <h3 class="font-bold text-xl mb-3" data-en="We Speak Your Language" data-ja="あなたの言葉で対応" data-zh="用您的语言服务">We Speak Your Language</h3>
                    <p class="text-sm" data-en="Small restaurant, big hearts. With just 12 staff members, we offer personalized attention that large chains can't match. English reservations available through Instagram or our online form." data-ja="小規模店ならではの心からのおもてなし。スタッフ12名だからこそできる、きめ細かい対応。英語予約はInstagramまたはオンラインフォームで承ります。" data-zh="小餐厅，大用心。仅有12名员工，我们提供大型连锁店无法比拟的个性化服务。可通过Instagram或在线表格进行英文预订。">
                        Small restaurant, big hearts. With just 12 staff members, we offer personalized attention that large chains can't match. English reservations available through Instagram or our online form.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Reservation CTA Section 1 -->
    <section id="reservation-cta-1" class="py-16 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <h2 class="font-display text-4xl mb-6" data-en="Ready to Reserve? Two Easy Ways" data-ja="予約準備はOK？簡単2つの方法">
                Ready to Reserve? Two Easy Ways
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <!-- Instagram DM -->
                <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                    <div class="text-5xl mb-4">📱</div>
                    <h3 class="text-2xl font-bold mb-3" data-en="Instagram Direct Message" data-ja="Instagram DM" data-zh="Instagram私信">Instagram Direct Message</h3>
                    <p class="mb-4" data-en="Send us a DM @yamaryu_bar" data-ja="@yamaryu_barにDMを送信" data-zh="发送私信至@yamaryu_bar">Send us a DM @yamaryu_bar</p>
                    <ul class="text-left mb-6 space-y-2">
                        <li>✓ <span data-en="Instant responses (usually within 1 hour)" data-ja="即座に返信（通常1時間以内）" data-zh="即时回复（通常1小时内）">Instant responses (usually within 1 hour)</span></li>
                        <li>✓ <span data-en="Easy to share photos & questions" data-ja="写真や質問を簡単に共有" data-zh="轻松分享照片和提问">Easy to share photos & questions</span></li>
                        <li>✓ <span data-en="Friendly, casual communication" data-ja="フレンドリーでカジュアルなやり取り" data-zh="友好、轻松的交流">Friendly, casual communication</span></li>
                    </ul>
                    <a href="https://www.instagram.com/yamaryu_bar/" target="_blank" class="btn-primary btn-instagram block w-full text-center">
                        <i class="fab fa-instagram mr-2"></i>
                        <span data-en="Message on Instagram" data-ja="Instagramでメッセージ" data-zh="在Instagram上留言">Message on Instagram</span>
                    </a>
                </div>
                
                <!-- Online Form -->
                <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                    <div class="text-5xl mb-4">📝</div>
                    <h3 class="text-2xl font-bold mb-3" data-en="English Reservation Form" data-ja="予約フォーム">English Reservation Form</h3>
                    <p class="mb-4" data-en="Fill out our simple online form" data-ja="簡単なオンラインフォームに記入" data-zh="填写简单的在线表格">Fill out our simple online form</p>
                    <ul class="text-left mb-6 space-y-2">
                        <li>✓ <span data-en="Available 24/7" data-ja="24時間受付" data-zh="全天候开放">Available 24/7</span></li>
                        <li>✓ <span data-en="No Japanese required" data-ja="日本語不要" data-zh="无需日语">No Japanese required</span></li>
                        <li>✓ <span data-en="Confirmation within 24 hours" data-ja="24時間以内に確認" data-zh="24小时内确认">Confirmation within 24 hours</span></li>
                    </ul>
                    <a href="#reservation-form" class="btn-primary block w-full text-center">
                        <i class="fas fa-calendar-alt mr-2"></i>
                        <span data-en="Reserve Now" data-ja="今すぐ予約" data-zh="立即预订">Reserve Now</span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="Our Signature Dishes" data-ja="おすすめメニュー" data-zh="招牌菜品">
                Our Signature Dishes
            </h2>
            <p class="text-center text-lg mb-12" data-en="Carefully Selected for Your Enjoyment" data-ja="お客様の喜びのために厳選" data-zh="为您精心挑选">
                Carefully Selected for Your Enjoyment
            </p>
            
            <!-- Menu Item 1: Wagyu Joshen Set -->
            <div class="mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="/images/menu-wagyu-joshen-set.jpg" alt="Wagyu Set" data-alt-en="YAMARYU Premium Wagyu Set" data-alt-ja="やま龍 上撰セット" data-alt-zh="YAMARYU特选和牛套餐" class="rounded-lg shadow-lg w-full">
                    </div>
                    <div>
                        <div class="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
                            🏆 <span data-en="Most Popular" data-ja="人気No.1" data-zh="最受欢迎">Most Popular</span>
                        </div>
                        <h3 class="text-3xl font-bold mb-4" data-en="YAMARYU Premium Wagyu Set (Full)" data-ja="やま龍 上撰セット（3〜4名様用）" data-zh="YAMARYU特选和牛套餐（3-4人份）">YAMARYU Premium Wagyu Set (Full)</h3>
                        <p class="text-2xl text-red-700 font-bold mb-4">¥8,118 <span class="text-sm font-normal" data-en="(tax included, for 3-4 people)" data-ja="（税込・3〜4名様用）" data-zh="（含税，3-4人份）">(tax included, for 3-4 people)</span></p>
                        <p class="mb-4" data-en="Our butcher's choice of the day's finest wagyu cuts, beautifully presented with grilled seasonal vegetables. This generous set includes:" data-ja="その日の最高級和牛を、肉職人が厳選。美しく盛り付けられた旬の焼き野菜とともに。このボリューム満点のセットには以下が含まれます：" data-zh="我们的屠夫精选当日最优质的和牛部位，搭配精美呈现的时令烤蔬菜。这份丰盛的套餐包括：">
                            Our butcher's choice of the day's finest wagyu cuts, beautifully presented with grilled seasonal vegetables. This generous set includes:
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li>• <strong data-en="Premium tongue (上タン)" data-ja="上タン">Premium tongue (上タン)</strong> - <span data-en="Rich, tender, melt-in-your-mouth" data-ja="濃厚で柔らか、口の中でとろける">Rich, tender, melt-in-your-mouth</span></li data-zh="浓郁、柔嫩、入口即化">
                            <li>• <strong data-en="Premium loin (上ロース)" data-ja="上ロース">Premium loin (上ロース)</strong> - <span data-en="Perfectly marbled for maximum flavor" data-ja="完璧な霜降りで最高の風味">Perfectly marbled for maximum flavor</span></li data-zh="完美的大理石纹理，风味十足">
                            <li>• <strong data-en="Aged premium skirt steak (熟成上はらみ)" data-ja="熟成上はらみ">Aged premium skirt steak (熟成上はらみ)</strong> - <span data-en="Our signature aged cut" data-ja="当店自慢の熟成肉">Our signature aged cut</span></li data-zh="我们的招牌熟成肉">
                            <li>• <strong data-en="Assorted premium wagyu" data-ja="和牛盛り合わせ">Assorted premium wagyu</strong> - <span data-en="Selected by our expert butcher daily" data-ja="肉職人が毎日厳選">Selected by our expert butcher daily</span></li data-zh="每日由专业屠夫精选">
                            <li>• <strong data-en="Seasonal grilled vegetables" data-ja="旬の焼き野菜" data-zh="时令烤蔬菜">Seasonal grilled vegetables</strong></li>
                        </ul>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <p class="text-sm" data-en="Perfect for sharing and discovering the full range of wagyu flavors." data-ja="シェアして和牛の多彩な味わいを発見するのに最適です。" data-zh="非常适合分享，探索和牛的全方位风味。">
                                Perfect for sharing and discovering the full range of wagyu flavors.
                            </p>
                        </div>
                        
                        <h4 class="text-xl font-bold mt-6 mb-2" data-en="Half Set (1.5-2 People)" data-ja="ハーフセット（1.5〜2名様用）" data-zh="半份套餐（1.5-2人份）">Half Set (1.5-2 People)</h4>
                        <p class="text-xl text-red-700 font-bold mb-2">¥5,368 <span class="text-sm font-normal" data-en="(tax included)" data-ja="（税込）" data-zh="（含税）">(tax included)</span></p>
                        <p class="text-sm" data-en="All the quality of our full set, perfectly portioned for two. Ideal for couples or those who want to try our premium selection without overordering." data-ja="フルセットと同じ品質を、2名様にちょうど良い量で。カップルや、過度な注文を避けたい方に最適です。" data-zh="与全份套餐品质相同，完美的双人份量。非常适合情侣或希望不过量点餐的客人。">
                            All the quality of our full set, perfectly portioned for two. Ideal for couples or those who want to try our premium selection without overordering.
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Menu Item 2: Extra-Thick Cut Premium Tongue -->
            <div class="mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="order-2 md:order-1">
                        <div class="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                            👨‍🍳 <span data-en="Chef's Recommendation" data-ja="シェフのおすすめ" data-zh="主厨推荐">Chef's Recommendation</span>
                        </div>
                        <h3 class="text-3xl font-bold mb-4" data-en="Extra-Thick Cut Premium Tongue" data-ja="特選厚切りタン" data-zh="特厚切特选牛舌">Extra-Thick Cut Premium Tongue</h3>
                        <p class="mb-4" data-en="For true meat lovers: Our signature extra-thick cut tongue is a revelation. Grilled over charcoal to achieve a crispy exterior and tender, juicy interior, this cut showcases why tongue is considered a delicacy in Japanese yakiniku culture." data-ja="本物の肉好きのために：当店自慢の特選厚切りタンは、まさに感動の一品。炭火で焼き上げることで外はカリッと、中はジューシーで柔らか。なぜタンが日本の焼肉文化で珍味とされているのかを体感できます。" data-zh="献给真正的肉食爱好者：我们的招牌特厚切牛舌令人惊艳。炭火烤制，外脆内嫩多汁，完美展现了为何牛舌在日式烤肉文化中被视为珍馐。">
                            For true meat lovers: Our signature extra-thick cut tongue is a revelation. Grilled over charcoal to achieve a crispy exterior and tender, juicy interior, this cut showcases why tongue is considered a delicacy in Japanese yakiniku culture.
                        </p>
                        <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                            <p class="text-sm"><strong data-en="Recommended cooking:" data-ja="おすすめの焼き方：" data-zh="推荐烹饪方式：">Recommended cooking:</strong> <span data-en="Medium-rare for maximum tenderness" data-ja="ミディアムレアで最高の柔らかさ" data-zh="五分熟最为柔嫩">Medium-rare for maximum tenderness</span></p>
                        </div>
                        <p class="text-sm italic" data-en="Popular with guests who appreciate quality over quantity." data-ja="量より質を重視するお客様に人気です。" data-zh="深受注重品质胜过数量的客人喜爱。">
                            Popular with guests who appreciate quality over quantity.
                        </p>
                    </div>
                    <div class="order-1 md:order-2">
                        <img src="/images/menu-thick-tongue.jpg" alt="Premium Tongue" data-alt-en="Extra-Thick Cut Premium Tongue" data-alt-ja="特選厚切りタン" data-alt-zh="特厚切特选牛舌" class="rounded-lg shadow-lg w-full">
                    </div>
                </div>
            </div>
            
            <!-- Menu Item 3: Yakiniku Pizza Bianco -->
            <div class="mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="/images/menu-yakiniku-pizza.jpg" alt="Yakiniku Pizza" data-alt-en="Stone-Baked Yakiniku Pizza Bianco" data-alt-ja="焼肉ピザ ビアンコ" data-alt-zh="石烤烤肉白披萨" class="rounded-lg shadow-lg w-full">
                    </div>
                    <div>
                        <div class="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                            👨‍👩‍👧‍👦 <span data-en="Family Favorite" data-ja="ファミリーに人気" data-zh="家庭最爱">Family Favorite</span>
                        </div>
                        <h3 class="text-3xl font-bold mb-4" data-en="Stone-Baked Yakiniku Pizza Bianco" data-ja="焼肉ピザ ビアンコ" data-zh="石烤烤肉白披萨">Stone-Baked Yakiniku Pizza Bianco</h3>
                        <p class="text-2xl text-red-700 font-bold mb-4">¥1,738 <span class="text-sm font-normal" data-en="(tax included)" data-ja="（税込）" data-zh="（含税）">(tax included)</span></p>
                        <p class="mb-4" data-en="A YAMARYU original: Premium wagyu meets Italian stone-oven pizza. Thin, crispy crust topped with our tender beef, fresh cheese, and aromatic herbs. Baked to perfection in our traditional stone oven." data-ja="やま龍オリジナル：最高級和牛とイタリアの石窯ピザの出会い。薄くてパリパリのクラストに、柔らかな牛肉、新鮮なチーズ、香り高いハーブをトッピング。伝統的な石窯で完璧に焼き上げます。" data-zh="YAMARYU原创：优质和牛遇见意式石窑披萨。薄脆的饼底，配上我们柔嫩的牛肉、新鲜奶酪和芳香草本。在传统石窑中烤制至完美。">
                            A YAMARYU original: Premium wagyu meets Italian stone-oven pizza. Thin, crispy crust topped with our tender beef, fresh cheese, and aromatic herbs. Baked to perfection in our traditional stone oven.
                        </p>
                        <h4 class="font-bold mb-2" data-en="Why guests love it:" data-ja="お客様が愛する理由：" data-zh="客人喜爱的理由：">Why guests love it:</h4>
                        <ul class="space-y-2 mb-6">
                            <li>• <span data-en="Children adore it (great for families!)" data-ja="お子様が大好き（ファミリーに最適！）" data-zh="孩子们超爱（家庭聚餐首选！）">Children adore it (great for families!)</span></li>
                            <li>• <span data-en="Lighter option for those who want variety" data-ja="バラエティを求める方に軽めの選択肢" data-zh="想要多样化的轻量选择">Lighter option for those who want variety</span></li>
                            <li>• <span data-en="Unique fusion you won't find elsewhere" data-ja="他では味わえないユニークな融合" data-zh="独一无二的融合，别处难觅">Unique fusion you won't find elsewhere</span></li>
                            <li>• <span data-en="Perfect with wine or beer" data-ja="ワインやビールに完璧にマッチ" data-zh="搭配葡萄酒或啤酒完美">Perfect with wine or beer</span></li>
                        </ul>
                        <div class="bg-green-50 border-l-4 border-green-400 p-4">
                            <p class="text-sm italic" data-en="\"It's like yakiniku and pizza had a delicious baby\" - Our guests" data-ja="「焼肉とピザが美味しい赤ちゃんを産んだみたい」- お客様の声" data-zh=""就像烤肉和披萨生了个美味宝宝" - 我们的客人">
                                "It's like yakiniku and pizza had a delicious baby" - Our guests
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Other Menu Highlights -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div class="card">
                    <img src="/images/menu-aged-harami.jpg" alt="Aged Skirt Steak" data-alt-en="Aged Premium Skirt Steak" data-alt-ja="熟成上はらみ" data-alt-zh="熟成特选横膈膜" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h4 class="font-bold text-xl mb-2" data-en="Aged Premium Skirt Steak" data-ja="熟成上はらみ" data-zh="熟成特选横膈膜">Aged Premium Skirt Steak</h4>
                    <p class="text-sm" data-en="Our signature aged cut—tender, flavorful, unforgettable" data-ja="当店自慢の熟成肉—柔らか、風味豊か、忘れられない" data-zh="我们的招牌熟成肉——柔嫩、风味浓郁、难以忘怀">Our signature aged cut—tender, flavorful, unforgettable</p>
                </div>
                <div class="card">
                    <img src="/images/menu-wagyu-tataki.jpg" alt="Wagyu Tataki" data-alt-en="Wagyu Red Meat Tataki" data-alt-ja="和牛赤身の炙り" data-alt-zh="和牛赤身炙烤" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h4 class="font-bold text-xl mb-2" data-en="Wagyu Red Meat Tataki" data-ja="和牛赤身の炙り" data-zh="和牛赤身炙烤">Wagyu Red Meat Tataki</h4>
                    <p class="text-sm" data-en="Lightly seared wagyu served carpaccio-style" data-ja="軽く炙った和牛をカルパッチョ風で" data-zh="轻炙和牛，卡帕乔式呈现">Lightly seared wagyu served carpaccio-style</p>
                </div>
                <div class="card">
                    <img src="/images/menu-dessert.jpg" alt="Desserts" data-alt-en="Homemade Desserts" data-alt-ja="自家製デザート" data-alt-zh="自制甜点" class="rounded-lg mb-4 w-full h-48 object-cover">
                    <h4 class="font-bold text-xl mb-2" data-en="Homemade Desserts" data-ja="自家製デザート" data-zh="自制甜点">Homemade Desserts</h4>
                    <p class="text-sm" data-en="Sweet endings made in-house daily" data-ja="毎日店内で手作りする甘いフィニッシュ" data-zh="每日店内手工制作的甜蜜结尾">Sweet endings made in-house daily</p>
                </div>
            </div>
            
            <div class="mt-8 text-center bg-yellow-50 p-6 rounded-lg">
                <p class="text-lg">💡 <span data-en="Not sure what to order? Our staff are happy to recommend based on your preferences. Just ask when you reserve!" data-ja="何を注文すればいいかわからない？スタッフがお好みに合わせておすすめします。予約時にお気軽にお尋ねください！" data-zh="不确定点什么？我们的员工很乐意根据您的喜好推荐。预订时随时询问！">Not sure what to order? Our staff are happy to recommend based on your preferences. Just ask when you reserve!</span></p>
            </div>
        </div>
    </section>

    <!-- Dietary Accommodations -->
    <section class="py-16 bg-amber-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="We Welcome All Dietary Needs" data-ja="すべての食事ニーズに対応します" data-zh="欢迎所有饮食需求">
                We Welcome All Dietary Needs
            </h2>
            <p class="text-center text-lg mb-12" data-en="Your Safety & Comfort Matter to Us" data-ja="お客様の安全と快適さを大切にします" data-zh="您的安全与舒适至关重要">
                Your Safety & Comfort Matter to Us
            </p>
            
            <p class="text-center max-w-3xl mx-auto mb-12" data-en="At YAMARYU, we believe everyone deserves to enjoy exceptional wagyu—regardless of dietary restrictions or religious requirements. Our small team takes pride in accommodating your needs with care and respect." data-ja="やま龍では、食事制限や宗教的な要件に関わらず、すべての人が最高の和牛を楽しむべきだと信じています。少人数のチームだからこそ、心を込めて丁寧に対応いたします。" data-zh="在YAMARYU，我们相信每个人都应该享受卓越的和牛——无论饮食限制或宗教要求如何。我们的小团队以用心和尊重满足您的需求为荣。">
                At YAMARYU, we believe everyone deserves to enjoy exceptional wagyu—regardless of dietary restrictions or religious requirements. Our small team takes pride in accommodating your needs with care and respect.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Allergy Information -->
                <div class="card">
                    <div class="text-5xl mb-4">🏥</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Allergy-Friendly Options" data-ja="アレルギー対応オプション" data-zh="过敏友好选项">Allergy-Friendly Options</h3>
                    <p class="text-sm mb-4" data-en="We take food allergies seriously. Please inform us of any allergies when making your reservation, and our chef will prepare your meal with dedicated utensils and careful attention to cross-contamination." data-ja="食物アレルギーを真剣に受け止めています。予約時にアレルギーをお知らせいただければ、専用の調理器具を使用し、交差汚染に細心の注意を払って調理いたします。" data-zh="我们认真对待食物过敏。预订时请告知任何过敏信息，我们的厨师将使用专用器具并仔细注意交叉污染来准备您的餐点。">
                        We take food allergies seriously. Please inform us of any allergies when making your reservation, and our chef will prepare your meal with dedicated utensils and careful attention to cross-contamination.
                    </p>
                    <p class="text-xs font-bold mb-2" data-en="Common allergens we can accommodate:" data-ja="対応可能な主なアレルゲン：" data-zh="我们可应对的常见过敏原：">Common allergens we can accommodate:</p>
                    <p class="text-xs mb-4">✓ Shellfish • ✓ Nuts • ✓ Soy • ✓ Gluten • ✓ Dairy</p>
                    <div class="bg-blue-50 p-3 rounded text-xs">
                        📝 <strong data-en="Note:" data-ja="注意：">Note:</strong> <span data-en="Please provide allergy details at least 24 hours before your visit to ensure proper preparation." data-ja="適切な準備のため、訪問の少なくとも24時間前にアレルギー詳細をお知らせください。">Please provide allergy details at least 24 hours before your visit to ensure proper preparation.</span data-zh="请至少在到访前24小时提供过敏详情，以确保妥善准备。">
                    </div>
                </div>
                
                <!-- Religious Dietary Requirements -->
                <div class="card">
                    <div class="text-5xl mb-4">🕌</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Muslim-Friendly Considerations" data-ja="ムスリムフレンドリー対応" data-zh="穆斯林友好考虑">Muslim-Friendly Considerations</h3>
                    <p class="text-sm mb-4" data-en="While we are not a certified halal restaurant, we respect religious dietary laws and will do our best to accommodate your needs." data-ja="認証ハラールレストランではありませんが、宗教的な食事規則を尊重し、可能な限り対応いたします。" data-zh="虽然我们不是经认证的清真餐厅，但我们尊重宗教饮食法规，并将尽力满足您的需求。">
                        While we are not a certified halal restaurant, we respect religious dietary laws and will do our best to accommodate your needs.
                    </p>
                    <p class="text-xs mb-4" data-en="We can:" data-ja="対応可能なこと：" data-zh="我们可以：">We can:</p>
                    <ul class="text-xs space-y-1 mb-4">
                        <li>• <span data-en="Prepare meals with dedicated cookware" data-ja="専用調理器具で調理" data-zh="使用专用炊具准备餐点">Prepare meals with dedicated cookware</span></li>
                        <li>• <span data-en="Provide ingredient lists for all dishes" data-ja="全料理の原材料リスト提供" data-zh="提供所有菜品的配料清单">Provide ingredient lists for all dishes</span></li>
                        <li>• <span data-en="Offer alternative menu options" data-ja="代替メニューの提案" data-zh="提供替代菜单选项">Offer alternative menu options</span></li>
                        <li>• <span data-en="Arrange consultations with our chef" data-ja="シェフとの事前相談" data-zh="安排与厨师的咨询">Arrange consultations with our chef</span></li>
                    </ul>
                    <div class="bg-green-50 p-3 rounded text-xs">
                        🤝 <span data-en="We welcome discussion: Contact us when booking to discuss your specific requirements." data-ja="ご相談歓迎：予約時に具体的なご要望をお聞かせください。" data-zh="欢迎讨论：预订时联系我们讨论您的具体要求。">We welcome discussion: Contact us when booking to discuss your specific requirements.</span>
                    </div>
                </div>
                
                <!-- Plant-Based & Special Diets -->
                <div class="card">
                    <div class="text-5xl mb-4">🥗</div>
                    <h3 class="font-bold text-xl mb-3" data-en="Vegetarian & Special Diets" data-ja="ベジタリアン・特別食" data-zh="素食与特殊饮食">Vegetarian & Special Diets</h3>
                    <p class="text-sm mb-4" data-en="While yakiniku is traditionally meat-focused, we offer options for various dietary preferences:" data-ja="焼肉は伝統的に肉中心ですが、様々な食事嗜好に対応するオプションをご用意しています：" data-zh="虽然烤肉传统上以肉类为主，但我们为各种饮食偏好提供选项：">
                        While yakiniku is traditionally meat-focused, we offer options for various dietary preferences:
                    </p>
                    <ul class="text-xs space-y-2 mb-4">
                        <li>✓ <span data-en="Grilled vegetable platters (fresh seasonal vegetables)" data-ja="焼き野菜盛り合わせ（新鮮な旬野菜）" data-zh="烤蔬菜拼盘（新鲜时令蔬菜）">Grilled vegetable platters (fresh seasonal vegetables)</span></li>
                        <li>✓ <span data-en="Rice dishes without animal products" data-ja="動物性食品不使用の米料理" data-zh="无动物制品的米饭菜肴">Rice dishes without animal products</span></li>
                        <li>✓ <span data-en="Gluten-free soy sauce alternative" data-ja="グルテンフリー醤油代替品" data-zh="无麸质酱油替代品">Gluten-free soy sauce alternative</span></li>
                        <li>✓ <span data-en="Custom vegetable-based sides" data-ja="カスタム野菜ベースサイド" data-zh="定制蔬菜配菜">Custom vegetable-based sides</span></li>
                    </ul>
                    <div class="bg-purple-50 p-3 rounded text-xs">
                        <span data-en="Let us know your requirements when booking—we'll ensure you have delicious options to enjoy." data-ja="予約時にご要望をお知らせください。美味しい選択肢をご用意いたします。" data-zh="预订时告知您的要求——我们将确保您有美味的选项可享用。">Let us know your requirements when booking—we'll ensure you have delicious options to enjoy.</span>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <p class="text-lg mb-4">💬 <span data-en="Have specific questions about ingredients or preparation?" data-ja="食材や調理方法について具体的なご質問がありますか？" data-zh="对配料或准备有具体疑问？">Have specific questions about ingredients or preparation?</span></p>
                <p data-en="Contact us through Instagram or our reservation form—we're here to help!" data-ja="Instagramまたはオンラインフォームでお問い合わせください。喜んでお手伝いいたします！" data-zh="通过Instagram或预订表格联系我们——我们随时为您服务！">Contact us through Instagram or our reservation form—we're here to help!</p>
                <a href="#reservation-form" class="btn-primary mt-4">
                    <span data-en="Contact Us Now" data-ja="今すぐお問い合わせ" data-zh="立即联系我们">Contact Us Now</span>
                </a>
            </div>
        </div>
    </section>

    <!-- The Experience -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="More Than a Meal—A Memory" data-ja="ただの食事ではなく、思い出を" data-zh="不仅是一餐——更是一段回忆">
                More Than a Meal—A Memory
            </h2>
            <p class="text-center text-lg mb-12" data-en="What to Expect at YAMARYU" data-ja="やま龍でのご体験" data-zh="在YAMARYU的体验">
                What to Expect at YAMARYU
            </p>
            
            <div class="space-y-12">
                <!-- Step 1 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/4 text-center">
                        <div class="text-6xl mb-4">🙏</div>
                        <h3 class="font-bold text-xl" data-en="Your Journey Begins" data-ja="あなたの旅が始まります" data-zh="您的旅程开始">Your Journey Begins</h3>
                    </div>
                    <div class="md:w-3/4">
                        <p data-en="From the moment you step through our door, you'll feel the difference. Our staff greets you warmly (in English!) and escorts you to your private booth-style table. The wooden interiors and soft lighting create an immediately relaxing atmosphere." data-ja="扉をくぐった瞬間から、違いを感じていただけます。スタッフが温かく（英語で！）お迎えし、個室風のお席までご案内します。木のインテリアと柔らかな照明が、すぐにリラックスできる雰囲気を作り出します。" data-zh="从您踏入我们大门的那一刻起，您就会感受到不同。我们的员工热情地（用英语！）迎接您，并护送您到包间式座位。木质内饰和柔和的灯光营造出即刻放松的氛围。">
                            From the moment you step through our door, you'll feel the difference. Our staff greets you warmly (in English!) and escorts you to your private booth-style table. The wooden interiors and soft lighting create an immediately relaxing atmosphere.
                        </p>
                        <p class="italic mt-2 text-sm opacity-75" data-en="\"Finally, a place where we didn't feel like tourists—we felt like guests.\"" data-ja="「ようやく、観光客ではなくゲストとして扱われる場所を見つけました。」"终于找到一个让我们感觉不像游客——而像宾客的地方。""终于找到一个让我们感觉不像游客——而像宾客的地方。"" data-zh="">
                            "Finally, a place where we didn't feel like tourists—we felt like guests."
                        </p>
                    </div>
                </div>
                
                <!-- Step 2 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/4 text-center order-2 md:order-1">
                        <div class="text-6xl mb-4">👨‍🍳</div>
                        <h3 class="font-bold text-xl" data-en="Expert Assistance" data-ja="専門家のサポート" data-zh="专业协助">Expert Assistance</h3>
                    </div>
                    <div class="md:w-3/4 order-1 md:order-2">
                        <p data-en="Not familiar with Japanese yakiniku? No problem. Our staff will guide you through how to grill each cut to perfection, which sauces complement which meats, the proper order to enjoy different cuts, and how to adjust the heat on your personal grill." data-ja="日本の焼肉に慣れていない？問題ありません。スタッフが、それぞれの部位を完璧に焼く方法、どの肉にどのタレが合うか、異なる部位を楽しむ順序、個人用グリルの火加減の調整方法をご案内します。" data-zh="不熟悉日式烤肉？没问题。我们的员工将指导您如何将每种部位烤至完美、哪种酱汁搭配哪种肉类、享用不同部位的正确顺序，以及如何调节个人烤架的火力。">
                            Not familiar with Japanese yakiniku? No problem. Our staff will guide you through how to grill each cut to perfection, which sauces complement which meats, the proper order to enjoy different cuts, and how to adjust the heat on your personal grill.
                        </p>
                        <p class="mt-2 font-bold text-sm" data-en="You'll learn while you eat—it's part of the fun!" data-ja="食べながら学ぶ—それも楽しみの一部です！" data-zh="您将在用餐中学习——这也是乐趣的一部分！">
                            You'll learn while you eat—it's part of the fun!
                        </p>
                    </div>
                </div>
                
                <!-- Step 3 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/4 text-center">
                        <div class="text-6xl mb-4">🥩</div>
                        <h3 class="font-bold text-xl" data-en="Taste the Difference" data-ja="違いを味わう" data-zh="品味不同">Taste the Difference</h3>
                    </div>
                    <div class="md:w-3/4">
                        <p data-en="This is where our butcher-direct advantage shines. Each bite of wagyu reveals layers of flavor—the marbling melts on your tongue, the charcoal adds a subtle smokiness, and you understand why Japanese beef is legendary worldwide." data-ja="ここで精肉卸直営の強みが輝きます。和牛の一口ごとに味わいの層が広がります。霜降りが舌の上でとろけ、炭火が微かなスモーキーさを加え、なぜ日本の牛肉が世界的に伝説となっているのかを理解できます。" data-zh="这正是我们肉铺直营优势的体现。和牛的每一口都展现出层次丰富的风味——大理石纹理在舌尖融化，炭火增添微妙的烟熏味，您会明白为何日本牛肉享誉全球。">
                            This is where our butcher-direct advantage shines. Each bite of wagyu reveals layers of flavor—the marbling melts on your tongue, the charcoal adds a subtle smokiness, and you understand why Japanese beef is legendary worldwide.
                        </p>
                        <p class="italic mt-2 text-sm opacity-75" data-en="\"We've had wagyu before, but never like this. You can taste the quality.\"" data-ja="「和牛は以前にも食べたことがありますが、こんなのは初めて。品質が味でわかります。」"我们以前吃过和牛，但从未像这样。您可以品尝到品质。""我们以前吃过和牛，但从未像这样。您可以品尝到品质。"" data-zh="">
                            "We've had wagyu before, but never like this. You can taste the quality."
                        </p>
                    </div>
                </div>
                
                <!-- Step 4 -->
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/4 text-center order-2 md:order-1">
                        <div class="text-6xl mb-4">🍷</div>
                        <h3 class="font-bold text-xl" data-en="Your Private Space" data-ja="プライベート空間" data-zh="您的私密空间">Your Private Space</h3>
                    </div>
                    <div class="md:w-3/4 order-1 md:order-2">
                        <p data-en="No rush. No crowds pressing in. Just you, your companions, and exceptional food in a space that feels like it's yours alone. This is dining as it should be—relaxed, intimate, memorable." data-ja="焦る必要はありません。押し寄せる人混みもありません。あなたと仲間、そして特別な料理だけが、あなただけの空間のように感じられます。これが本来の食事のあり方—リラックスして、親密で、忘れられない。" data-zh="不必匆忙。没有拥挤的人群。只有您、您的同伴和卓越的美食，在一个仿佛专属于您的空间。这才是用餐的应有之道——放松、私密、难忘。">
                            No rush. No crowds pressing in. Just you, your companions, and exceptional food in a space that feels like it's yours alone. This is dining as it should be—relaxed, intimate, memorable.
                        </p>
                        <p class="mt-2 font-bold text-sm" data-en="Take photos. Laugh together. Create memories." data-ja="写真を撮って。一緒に笑って。思い出を作りましょう。" data-zh="拍照留念。一起欢笑。创造回忆。">
                            Take photos. Laugh together. Create memories.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Customer Voices -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="What Our International Guests Say" data-ja="海外からのお客様の声" data-zh="国际客人的评价">
                What Our International Guests Say
            </h2>
            <p class="text-center text-lg mb-12" data-en="Real Experiences from Travelers Like You" data-ja="あなたのような旅行者の本物の体験" data-zh="像您一样的旅行者的真实体验">
                Real Experiences from Travelers Like You
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Review 1 -->
                <div class="card bg-white">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">SM</div>
                        <div>
                            <h4 class="font-bold">Sarah M.</h4>
                            <p class="text-sm opacity-75">🇦🇺 Australia</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-sm review-text" data-en="We were nervous about dining in a smaller city, but YAMARYU exceeded all expectations. The staff communicated perfectly in English, the wagyu was incredible, and the private booth made us feel so comfortable. The yakiniku pizza was a fun surprise our kids loved!" data-ja="小さな都市での食事に不安がありましたが、やま龍は期待を超えました。スタッフは完璧な英語で対応し、和牛は素晴らしく、個室ブースは快適でした。焼肉ピザは子供たちが大喜びのサプライズでした！" data-zh="我们对在小城市用餐感到紧张，但YAMARYU超出了所有期望。员工用完美的英语交流，和牛令人惊艳，私密包间让我们感到非常舒适。烤肉披萨是孩子们喜爱的惊喜！">
                        We were nervous about dining in a smaller city, but YAMARYU exceeded all expectations. The staff communicated perfectly in English, the wagyu was incredible, and the private booth made us feel so comfortable. The yakiniku pizza was a fun surprise our kids loved!
                    </p>
                </div>
                
                <!-- Review 2 -->
                <div class="card bg-white">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">AK</div>
                        <div>
                            <h4 class="font-bold">Ahmed K.</h4>
                            <p class="text-sm opacity-75">🇦🇪 UAE</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-sm review-text" data-en="As a Muslim traveler, I appreciated how respectfully they handled my dietary requirements. They took time to explain ingredients and prepared my meal with care. The wagyu quality is outstanding—definitely the best meal we had in Osaka." data-ja="ムスリムの旅行者として、彼らが私の食事要件を尊重して対応してくれたことに感謝しています。食材について丁寧に説明し、心を込めて調理してくれました。和牛の品質は群を抜いています—大阪で食べた中で間違いなく最高の食事でした。" data-zh="作为穆斯林旅行者，我感激他们尊重并满足了我的饮食要求。他们花时间解释配料并精心准备我的餐点。和牛品质卓越——绝对是我们在大阪吃过的最好的一餐。">
                        As a Muslim traveler, I appreciated how respectfully they handled my dietary requirements. They took time to explain ingredients and prepared my meal with care. The wagyu quality is outstanding—definitely the best meal we had in Osaka.
                    </p>
                </div>
                
                <!-- Review 3 -->
                <div class="card bg-white">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">JT</div>
                        <div>
                            <h4 class="font-bold">Jennifer & Tom</h4>
                            <p class="text-sm opacity-75">🇺🇸 USA</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-sm review-text" data-en="Booking through Instagram was so easy, and the response was almost immediate. The intimate setting was perfect for our anniversary dinner. You can tell this is a family-run place that truly cares about each guest." data-ja="Instagramでの予約はとても簡単で、返信もほぼ即座でした。親密な雰囲気は記念日ディナーに完璧でした。ここは家族経営で、一人ひとりのゲストを本当に大切にしていることがわかります。" data-zh="通过Instagram预订非常简单，回复几乎是即时的。私密的氛围非常适合我们的纪念日晚餐。您可以看出这是一家家族企业，真正关心每一位客人。">
                        Booking through Instagram was so easy, and the response was almost immediate. The intimate setting was perfect for our anniversary dinner. You can tell this is a family-run place that truly cares about each guest.
                    </p>
                </div>
                
                <!-- Review 4 -->
                <div class="card bg-white">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">MP</div>
                        <div>
                            <h4 class="font-bold">Marco P.</h4>
                            <p class="text-sm opacity-75">🇮🇹 Italy</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-sm review-text" data-en="I'm Italian, so I was skeptical about their 'yakiniku pizza,' but wow—the stone oven technique is authentic, and the wagyu topping is genius. Even as a pizza snob, I was impressed. The traditional wagyu cuts were phenomenal too." data-ja="イタリア人なので『焼肉ピザ』には懐疑的でしたが、驚きました—石窯技術は本物で、和牛トッピングは天才的。ピザに厳しい私も感動しました。伝統的な和牛カットも驚異的でした。" data-zh="我是意大利人，所以对烤肉披萨持怀疑态度，但哇——石窑技术是真实的，和牛配料简直是天才。即使作为披萨行家，我也印象深刻。传统的和牛切块也非常出色。">
                        I'm Italian, so I was skeptical about their 'yakiniku pizza,' but wow—the stone oven technique is authentic, and the wagyu topping is genius. Even as a pizza snob, I was impressed. The traditional wagyu cuts were phenomenal too.
                    </p>
                </div>
                
                <!-- Review 5 -->
                <div class="card bg-white">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">LW</div>
                        <div>
                            <h4 class="font-bold">Linda W.</h4>
                            <p class="text-sm opacity-75">🇬🇧 UK</p>
                        </div>
                    </div>
                    <div class="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
                    <p class="text-sm review-text" data-en="We stayed nearby and took a chance on this place. Best decision of our trip! The meat quality is restaurant-supply level (because it IS restaurant supply!), and the prices are incredibly fair. Don't miss this hidden gem." data-ja="近くに宿泊していて、この店に賭けてみました。旅行中最高の決断でした！肉の品質はレストラン供給レベル（実際に卸業者だから！）で、価格は信じられないほど良心的。この隠れた名店を見逃さないでください。" data-zh="我们住在附近，决定尝试这家店。这是我们旅行中最好的决定！肉的质量是餐厅供应级别（因为他们确实是供应商！），价格非常合理。不要错过这个隐藏的宝石。">
                        We stayed nearby and took a chance on this place. Best decision of our trip! The meat quality is restaurant-supply level (because it IS restaurant supply!), and the prices are incredibly fair. Don't miss this hidden gem.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Reservation Form Section -->
    <section id="reservation-form" class="py-16 bg-white">
        <div class="max-w-3xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="Make Your Reservation" data-ja="予約する" data-zh="进行预订">
                Make Your Reservation
            </h2>
            <p class="text-center text-lg mb-12" data-en="Fill out this form and we'll confirm your booking within 24 hours" data-ja="このフォームに記入してください。24時間以内に予約を確認します" data-zh="填写此表格，我们将在24小时内确认您的预订">
                Fill out this form and we'll confirm your booking within 24 hours
            </p>
            
            <form id="reservationForm" class="card bg-gray-50">
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Name *" data-ja="お名前 *" data-zh="姓名 *">Name *</label>
                    <input type="text" name="name" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="John Smith">
                </div>
                
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Email *" data-ja="メールアドレス *" data-zh="电子邮箱 *">Email *</label>
                    <input type="email" name="email" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="john@example.com">
                </div>
                
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Phone Number (with country code) *" data-ja="電話番号（国番号付き） *" data-zh="电话号码（含国家代码）*">Phone Number (with country code) *</label>
                    <input type="tel" name="phone" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="+1 555 123 4567">
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label class="block font-bold mb-2" data-en="Preferred Date *" data-ja="希望日 *" data-zh="首选日期 *">Preferred Date *</label>
                        <input type="date" name="date" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                    </div>
                    <div>
                        <label class="block font-bold mb-2" data-en="Preferred Time *" data-ja="希望時刻 *" data-zh="首选时间 *">Preferred Time *</label>
                        <select name="time" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select time / 時間を選択</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                        </select>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Number of Guests *" data-ja="人数 *" data-zh="客人人数 *">Number of Guests *</label>
                    <select name="guests" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option value="">Select / 選択</option>
                        <option value="1">1 person / 1名</option>
                        <option value="2">2 people / 2名</option>
                        <option value="3">3 people / 3名</option>
                        <option value="4">4 people / 4名</option>
                        <option value="5">5 people / 5名</option>
                        <option value="6">6 people / 6名</option>
                        <option value="7+">7+ people / 7名以上</option>
                    </select>
                </div>
                
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Dietary Restrictions or Allergies" data-ja="食事制限やアレルギー" data-zh="饮食限制或过敏">Dietary Restrictions or Allergies</label>
                    <textarea name="dietary" rows="3" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Please let us know about any allergies, halal requirements, vegetarian preferences, etc."></textarea>
                </div>
                
                <div class="mb-6">
                    <label class="block font-bold mb-2" data-en="Special Requests or Questions" data-ja="特別なリクエストや質問" data-zh="特殊要求或问题">Special Requests or Questions</label>
                    <textarea name="requests" rows="3" class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Anniversary celebration, seating preferences, menu questions, etc."></textarea>
                </div>
                
                <button type="submit" class="btn-primary w-full text-center text-lg py-4">
                    <i class="fas fa-paper-plane mr-2"></i>
                    <span data-en="Submit Reservation Request" data-ja="予約リクエストを送信" data-zh="提交预订请求">Submit Reservation Request</span>
                </button>
                
                <p class="text-sm text-center mt-4 opacity-75" data-en="We'll respond to your request within 24 hours. Peak times may require flexibility with timing." data-ja="24時間以内にリクエストに返信します。混雑時は時間に柔軟性が必要な場合があります。" data-zh="我们将在24小时内回复您的请求。高峰时段可能需要时间灵活性。">
                    We'll respond to your request within 24 hours. Peak times may require flexibility with timing.
                </p>
            </form>
            
            <div id="form-success" class="hidden mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                <div class="text-5xl mb-4">✅</div>
                <h3 class="text-2xl font-bold mb-2 text-green-700" data-en="Reservation Request Received!" data-ja="予約リクエストを受け付けました！" data-zh="预订请求已收到！">Reservation Request Received!</h3>
                <p data-en="Thank you! We'll confirm your reservation within 24 hours. Check your email for our response." data-ja="ありがとうございます！24時間以内に予約を確認します。返信メールをご確認ください。" data-zh="谢谢！我们将在24小时内确认您的预订。请查看您的电子邮件以获取我们的回复。">Thank you! We'll confirm your reservation within 24 hours. Check your email for our response.</p>
            </div>
        </div>
    </section>

    <!-- Access & Information -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-center section-title" data-en="Find Us in Izumi City" data-ja="和泉市でお会いしましょう" data-zh="在和泉市找到我们">
                Find Us in Izumi City
            </h2>
            <p class="text-center text-lg mb-12" data-en="Easy Access from Central Osaka" data-ja="大阪中心部からアクセス良好" data-zh="从大阪市中心轻松到达">
                Easy Access from Central Osaka
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Map & Location -->
                <div>
                    <div class="bg-gray-300 rounded-lg overflow-hidden mb-6" style="height: 300px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8!2d135.4!3d34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMwJzAwLjAiTiAxMzXCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sjp!4v1234567890" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="font-bold text-xl mb-3 flex items-center"><i class="fas fa-map-marker-alt mr-2 text-red-600"></i><span data-en="Address" data-ja="住所" data-zh="地址">Address</span></h3>
                        <p class="mb-2" data-en="📍 2F Ichikura Building" data-ja="📍 イチクラビル 2階" data-zh="📍 Ichikura 大楼 2 楼">📍 2F Ichikura Building</p>
                        <p class="mb-2" data-en="1-2-41 Nozomino, Izumi City" data-ja="のぞみ野1-2-41、和泉市" data-zh="和泉市 Nozomino 1-2-41">1-2-41 Nozomino, Izumi City</p>
                        <p class="mb-2" data-en="Osaka 594-1105, Japan" data-ja="大阪府 594-1105、日本" data-zh="日本大阪府 594-1105">Osaka 594-1105, Japan</p>
                        <p class="text-sm opacity-75">〒594-1105 大阪府和泉市のぞみ野1-2-41 イチクラビル 2階</p>
                    </div>
                    
                    <div class="mb-6">
                        <h3 class="font-bold text-xl mb-3 flex items-center"><i class="fas fa-train mr-2 text-blue-600"></i><span data-en="Access" data-ja="アクセス" data-zh="交通方式">Access</span></h3>
                        <p class="mb-2"><strong>🚇 <span data-en="From Izumi-chuo Station" data-ja="和泉中央駅から" data-zh="从和泉中央站">From Izumi-chuo Station</span></strong> <span data-en="(Semboku Rapid Railway)" data-ja="（泉北高速鉄道）" data-zh="（泉北高速铁道）">(Semboku Rapid Railway)</span></p>
                        <p class="mb-2 ml-6">→ <span data-en="15-minute walk" data-ja="徒歩15分" data-zh="步行15分钟">15-minute walk</span></p>
                        <p class="mb-4 ml-6">→ <span data-en="5-minute taxi ride (approximately ¥1,000)" data-ja="タクシー5分（約1,000円）" data-zh="出租车5分钟（约1,000日元）">5-minute taxi ride (approximately ¥1,000)</span></p>
                        <p class="mb-2"><strong>🚗 <span data-en="Parking Available" data-ja="駐車場あり" data-zh="提供停车场">Parking Available</span></strong></p>
                        <p class="ml-6 text-sm" data-en="Partner parking nearby (details provided upon reservation)" data-ja="提携駐車場近く（予約時に詳細をご案内）" data-zh="附近有合作停车场（预订时提供详情）">Partner parking nearby (details provided upon reservation)</p>
                    </div>
                    
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <p class="text-sm">🏘️ <span data-en="Located in Momoyama University's charming neighborhood—Stylish area with modern architecture" data-ja="桃山大学の魅力的な地域に位置—モダンな建築が並ぶスタイリッシュなエリア" data-zh="位于桃山大学迷人的社区——现代建筑风格的时尚区域">Located in Momoyama University's charming neighborhood—Stylish area with modern architecture</span></p>
                    </div>
                </div>
                
                <!-- Practical Information -->
                <div>
                    <div class="card mb-6">
                        <h3 class="font-bold text-xl mb-4 flex items-center"><i class="fas fa-clock mr-2 text-yellow-600"></i><span data-en="Business Hours" data-ja="営業時間" data-zh="营业时间">Business Hours</span></h3>
                        
                        <div class="mb-4">
                            <p class="font-bold mb-1">🍱 <span data-en="LUNCH" data-ja="ランチ" data-zh="午餐">LUNCH</span></p>
                            <p class="ml-6">11:00 - 14:30 (<span data-en="Last Order 14:00" data-ja="ラストオーダー 14:00" data-zh="最后点餐 14:00">Last Order 14:00</span>)</p>
                        </div>
                        
                        <div class="mb-4">
                            <p class="font-bold mb-1">🌙 <span data-en="DINNER" data-ja="ディナー" data-zh="晚餐">DINNER</span></p>
                            <p class="ml-6">17:00 - 21:30 (<span data-en="Last Order 21:00" data-ja="ラストオーダー 21:00" data-zh="最后点餐 21:00">Last Order 21:00</span>)</p>
                        </div>
                        
                        <div class="mb-4">
                            <p class="font-bold mb-1 text-red-600">🚫 <span data-en="CLOSED" data-ja="定休日" data-zh="休息日">CLOSED</span></p>
                            <p class="ml-6"><span data-en="Tuesdays (火曜日)" data-ja="火曜日 (Tuesdays)" data-zh="星期二（火曜日）">Tuesdays (火曜日)</span></p>
                        </div>
                        
                        <div class="bg-yellow-50 p-3 rounded text-sm">
                            ⚠️ <span data-en="Hours may vary during holidays. Confirm when booking." data-ja="祝日は営業時間が変更になる場合があります。予約時にご確認ください。" data-zh="节假日营业时间可能有所变化。预订时请确认。">Hours may vary during holidays. Confirm when booking.</span>
                        </div>
                    </div>
                    
                    <div class="card mb-6">
                        <h3 class="font-bold text-xl mb-4 flex items-center"><i class="fas fa-phone mr-2 text-green-600"></i><span data-en="Contact" data-ja="お問い合わせ" data-zh="联系方式">Contact</span></h3>
                        <p class="mb-2">📞 <strong data-en="Phone:" data-ja="電話：" data-zh="电话：">Phone:</strong> <a href="tel:0725255717" class="text-blue-600 hover:underline">0725-25-5717</a></p>
                        <p class="text-sm mb-4 ml-6 opacity-75" data-en="(Japanese & basic English available)" data-ja="（日本語・基本的な英語対応可能）" data-zh="（可使用日语及基础英语）">(Japanese & basic English available)</p>
                        
                        <p class="mb-2">📱 <strong>Instagram:</strong> <a href="https://www.instagram.com/yamaryu_bar/" target="_blank" class="text-blue-600 hover:underline">@yamaryu_bar</a></p>
                        
                        <p class="mb-2">🌐 <strong data-en="Official Site:" data-ja="公式サイト：" data-zh="官方网站：">Official Site:</strong></p>
                        <p class="ml-6"><a href="https://www.hotpepper.jp/strJ001263382/" target="_blank" class="text-blue-600 hover:underline text-sm break-all">hotpepper.jp/strJ001263382</a></p>
                    </div>
                    
                    <div class="card mb-6">
                        <h3 class="font-bold text-xl mb-4 flex items-center"><i class="fas fa-info-circle mr-2 text-purple-600"></i><span data-en="What to Bring" data-ja="持ち物" data-zh="需携带物品">What to Bring</span></h3>
                        <p class="mb-2">✓ <span data-en="Reservation confirmation (if booked online)" data-ja="予約確認（オンライン予約の場合）" data-zh="预订确认（如在线预订）">Reservation confirmation (if booked online)</span></p>
                        <p class="mb-2">✓ <span data-en="Comfortable clothing (grilling can create aromas!)" data-ja="快適な服装（焼肉の香りがつく可能性があります）" data-zh="舒适的服装（烤肉可能会留下香气！）">Comfortable clothing (grilling can create aromas!)</span></p>
                        <p class="mb-2">✓ <span data-en="Camera for photos (encouraged!)" data-ja="カメラ（写真撮影歓迎！）" data-zh="相机拍照（欢迎！）">Camera for photos (encouraged!)</span></p>
                        <p class="mb-2">✗ <span data-en="No strict dress code—casual is fine" data-ja="ドレスコード不要—カジュアルでOK" data-zh="无严格着装要求——休闲装即可">No strict dress code—casual is fine</span></p>
                    </div>
                    
                    <div class="card">
                        <h3 class="font-bold text-xl mb-4 flex items-center"><i class="fas fa-credit-card mr-2 text-indigo-600"></i><span data-en="Payment Methods" data-ja="お支払い方法" data-zh="支付方式">Payment Methods</span></h3>
                        <p class="mb-2">💳 <span data-en="Credit Cards Accepted" data-ja="クレジットカード可" data-zh="接受信用卡">Credit Cards Accepted</span></p>
                        <p>💴 <span data-en="Cash Accepted (Yen)" data-ja="現金可（日本円）" data-zh="接受现金（日元）">Cash Accepted (Yen)</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer CTA -->
    <section class="py-16 bg-gradient-to-br from-red-900 via-red-800 to-black text-white relative overflow-hidden" style="background-image: url('https://images.unsplash.com/photo-1558030006-450675393462?w=1600'); background-size: cover; background-position: center;">
        <div class="absolute inset-0 bg-black bg-opacity-70"></div>
        <div class="relative max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-display text-5xl mb-6" data-en="Your Osaka Wagyu Experience Awaits" data-ja="大阪和牛体験があなたを待っています" data-zh="您的大阪和牛体验等着您">
                Your Osaka Wagyu Experience Awaits
            </h2>
            <p class="text-xl mb-8 opacity-90" data-en="Join travelers from around the world who've discovered Izumi City's best-kept secret. From our butcher shop to your plate—this is wagyu as it's meant to be." data-ja="世界中の旅行者が発見した、和泉市の秘宝に参加しましょう。精肉店からあなたのお皿へ—これが本来の和牛です。" data-zh="加入来自世界各地发现和泉市最佳秘密的旅行者行列。从我们的肉店到您的餐盘——这就是和牛该有的样子。">
                Join travelers from around the world who've discovered Izumi City's best-kept secret. From our butcher shop to your plate—this is wagyu as it's meant to be.
            </p>
            
            <div class="flex flex-col md:flex-row gap-6 justify-center mb-8">
                <a href="https://www.instagram.com/yamaryu_bar/" target="_blank" class="btn-primary btn-instagram text-xl py-4 px-8">
                    <i class="fab fa-instagram mr-2"></i>
                    <span data-en="Reserve via Instagram" data-ja="Instagramで予約" data-zh="通过Instagram预订">Reserve via Instagram</span>
                </a>
                <a href="#reservation-form" class="btn-primary text-xl py-4 px-8">
                    <i class="fas fa-calendar-alt mr-2"></i>
                    <span data-en="English Reservation Form" data-ja="予約フォーム" data-zh="预订表格">English Reservation Form</span>
                </a>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
                <div class="flex items-center justify-center"><i class="fas fa-check-circle mr-2"></i><span data-en="English reservations welcome" data-ja="英語予約歓迎" data-zh="欢迎英语预订">English reservations welcome</span></div>
                <div class="flex items-center justify-center"><i class="fas fa-check-circle mr-2"></i><span data-en="Dietary restrictions accommodated" data-ja="食事制限対応" data-zh="可满足饮食限制">Dietary restrictions accommodated</span></div>
                <div class="flex items-center justify-center"><i class="fas fa-check-circle mr-2"></i><span data-en="Family-friendly & couple-friendly" data-ja="ファミリー&カップル歓迎" data-zh="适合家庭和情侣">Family-friendly & couple-friendly</span></div>
                <div class="flex items-center justify-center"><i class="fas fa-check-circle mr-2"></i><span data-en="Small, caring team" data-ja="心温まる少人数チーム" data-zh="贴心的小团队">Small, caring team</span></div>
            </div>
            
            <div class="border-t border-white border-opacity-30 pt-8">
                <p class="text-lg mb-2">📍 <strong>YAKINIKU BAR YAMARYU</strong> | 焼肉ばーる やま龍</p>
                <p class="opacity-75" data-en="Izumi City, Osaka" data-ja="大阪府和泉市" data-zh="大阪府和泉市">Izumi City, Osaka</p>
            </div>
        </div>
    </section>

    <!-- Footer Links -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <div class="flex flex-wrap justify-center gap-6 mb-6">
                <a href="https://www.instagram.com/yamaryu_bar/" target="_blank" class="hover:text-yellow-400 transition">Instagram</a>
                <a href="https://www.hotpepper.jp/strJ001263382/" target="_blank" class="hover:text-yellow-400 transition">Hotpepper Page</a>
                <a href="#reservation-form" class="hover:text-yellow-400 transition" data-en="Reservation Form" data-ja="予約フォーム" data-zh="预订表格">Reservation Form</a>
                <a href="#" class="hover:text-yellow-400 transition" data-en="Allergy Information" data-ja="アレルギー情報" data-zh="过敏信息">Allergy Information</a>
            </div>
            <p class="text-sm opacity-75">© 2024 YAKINIKU BAR YAMARYU. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script>
        // Language toggle functionality (3 languages: en, ja, zh)
        let currentLang = 'en';
        const languages = ['en', 'ja', 'zh'];
        const langLabels = {
            'en': '日本語',
            'ja': '简体中文', 
            'zh': 'English'
        };
        
        function toggleLanguage() {
            const currentIndex = languages.indexOf(currentLang);
            const nextIndex = (currentIndex + 1) % languages.length;
            currentLang = languages[nextIndex];
            updateLanguage();
            localStorage.setItem('yamaryu_lang', currentLang);
        }
        
        function updateLanguage() {
            document.querySelectorAll('[data-en]').forEach(el => {
                const enText = el.getAttribute('data-en');
                const jaText = el.getAttribute('data-ja');
                const zhText = el.getAttribute('data-zh');
                
                if (enText && jaText && zhText) {
                    if (currentLang === 'en') {
                        el.innerHTML = enText;
                    } else if (currentLang === 'ja') {
                        el.innerHTML = jaText;
                    } else if (currentLang === 'zh') {
                        el.innerHTML = zhText;
                    }
                }
            });
            
            // Update image alt attributes
            document.querySelectorAll('img[data-alt-en]').forEach(img => {
                const altEn = img.getAttribute('data-alt-en');
                const altJa = img.getAttribute('data-alt-ja');
                const altZh = img.getAttribute('data-alt-zh');
                
                if (altEn && altJa && altZh) {
                    if (currentLang === 'en') {
                        img.alt = altEn;
                    } else if (currentLang === 'ja') {
                        img.alt = altJa;
                    } else if (currentLang === 'zh') {
                        img.alt = altZh;
                    }
                }
            });
            
            // Update language switcher text
            document.getElementById('langText').textContent = langLabels[currentLang];
            
            // Update HTML lang attribute
            document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;
        }
        
        // Initialize language from localStorage
        const savedLang = localStorage.getItem('yamaryu_lang');
        if (savedLang) {
            currentLang = savedLang;
            updateLanguage();
        }
        
        // Smooth scroll to reservation
        function scrollToReservation() {
            document.getElementById('reservation-form').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
        
        // Handle reservation form submission
        document.getElementById('reservationForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await axios.post('/api/reservation', data);
                
                if (response.data.success) {
                    // Hide form and show success message
                    e.target.style.display = 'none';
                    document.getElementById('form-success').classList.remove('hidden');
                    
                    // Scroll to success message
                    document.getElementById('form-success').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            } catch (error) {
                const errorMessages = {
                    'en': 'Sorry, there was an error submitting your reservation. Please try contacting us via Instagram instead.',
                    'ja': '申し訳ございません、予約送信中にエラーが発生しました。Instagramでのご連絡をお願いいたします。',
                    'zh': '抱歉，提交预订时出现错误。请通过Instagram联系我们。'
                };
                alert(errorMessages[currentLang]);
            }
        });
        
        // Set minimum date to today for date picker
        const today = new Date().toISOString().split('T')[0];
        document.querySelector('input[name="date"]').setAttribute('min', today);
    </script>
</body>
</html>
  `)
})

export default app
