# YAKINIKU BAR YAMARYU - Official Website

焼肉ばーる やま龍の公式ウェブサイト（訪日外国人観光客向け英語LP）

## 🌐 公開URL

- **開発環境**: https://3000-i1n8zb0l2ffq64mgjns01-583b4d74.sandbox.novita.ai/
- **本番環境**: デプロイ後に更新

## 📋 プロジェクト概要

大阪府和泉市にある焼肉店「焼肉ばーる やま龍（YAKINIKU BAR YAMARYU）」の訪日外国人観光客向けランディングページです。

### 主な特徴

- **多言語対応**: 英語・日本語・中国語簡体字の3言語対応、ワンクリック切り替え（LocalStorageで言語設定保存）
- **レスポンシブデザイン**: スマートフォン、タブレット、デスクトップに完全対応
- **オンライン予約フォーム**: 英語での予約受付システム
- **Instagram連携**: @yamaryu_bar への直接リンク
- **食事制限対応情報**: アレルギー、ハラール、ベジタリアン対応の明示

## 🎯 主要機能

### 実装済み機能

✅ **ヒーローセクション**: 魅力的なビジュアルとキャッチコピー  
✅ **店舗の強み紹介**: 精肉卸直営、個室風空間、ユニークメニュー  
✅ **メニュー紹介**:
- 和牛上撰セット（フル・ハーフ）
- 特選厚切りタン
- 焼肉ピザ ビアンコ
- その他メニュー

✅ **食事制限対応**: アレルギー、ハラール、ベジタリアン情報  
✅ **予約システム**: Instagram DM + オンラインフォーム  
✅ **お客様の声**: 海外ゲストのレビュー  
✅ **店舗情報・アクセス**: 営業時間、地図、連絡先  
✅ **多言語切り替え**: 右上の言語スイッチャーで英語⇔日本語⇔中国語簡体字  
✅ **フローティングCTA**: 常時表示の予約ボタン  

### 今後実装可能な機能（オプション）

- 店舗写真のアップロード機能（Cloudflare R2連携）
- 予約フォームからのメール通知システム
- Google Analytics連携
- メニュー管理システム

## 🛠️ 技術スタック

- **フレームワーク**: Hono v4.11+ (Cloudflare Pages対応)
- **ランタイム**: Cloudflare Workers
- **ビルドツール**: Vite v6.3+
- **スタイリング**: Tailwind CSS (CDN)
- **アイコン**: Font Awesome 6.4
- **フォント**: Google Fonts (Noto Sans JP, Noto Sans SC, Playfair Display)
- **HTTPクライアント**: Axios 1.6
- **言語**: TypeScript
- **デプロイ**: Cloudflare Pages

## 📁 プロジェクト構成

```
webapp/
├── src/
│   ├── index.tsx           # メインアプリケーション（全LP実装）
│   └── renderer.tsx        # レンダラー（未使用）
├── public/                 # 静的ファイル（将来の画像用）
│   ├── images/
│   ├── css/
│   └── js/
├── dist/                   # ビルド出力（git無視）
├── .git/                   # Gitリポジトリ
├── .gitignore              # Git除外設定
├── ecosystem.config.cjs    # PM2設定
├── wrangler.jsonc          # Cloudflare設定
├── package.json            # 依存関係とスクリプト
├── tsconfig.json           # TypeScript設定
├── vite.config.ts          # Vite設定
└── README.md               # このファイル
```

## 🚀 セットアップ・開発

### 必要な環境

- Node.js 18以上
- npm または yarn

### インストール

```bash
cd /home/user/webapp
npm install
```

### 開発サーバー起動

```bash
# ビルド
npm run build

# PM2でサービス起動
pm2 start ecosystem.config.cjs

# ステータス確認
pm2 list

# ログ確認
pm2 logs webapp --nostream

# サービス停止
pm2 stop webapp

# サービス削除
pm2 delete webapp
```

### ポート管理

```bash
# ポート3000のクリーンアップ
npm run clean-port

# または
fuser -k 3000/tcp 2>/dev/null || true
```

## 📝 利用可能なスクリプト

```bash
npm run dev              # Vite開発サーバー起動
npm run dev:sandbox      # Wrangler開発サーバー起動（sandbox用）
npm run build            # 本番ビルド
npm run preview          # ローカルプレビュー
npm run deploy           # Cloudflare Pagesにデプロイ
npm run deploy:prod      # 本番環境デプロイ（プロジェクト名指定）
npm run clean-port       # ポート3000クリーンアップ
npm run test             # サービス動作確認（curl）
```

## 🌍 デプロイ

### Cloudflare Pagesへのデプロイ

1. **Cloudflare API Keyの設定**（初回のみ）
   ```bash
   # setup_cloudflare_api_key ツールを実行
   # または wrangler login
   ```

2. **プロジェクト作成**（初回のみ）
   ```bash
   npx wrangler pages project create yamaryu-yakiniku \
     --production-branch main \
     --compatibility-date 2026-01-08
   ```

3. **デプロイ実行**
   ```bash
   npm run deploy:prod
   ```

4. **デプロイURL**
   - 本番: `https://yamaryu-yakiniku.pages.dev`
   - ブランチ: `https://main.yamaryu-yakiniku.pages.dev`

## 📱 主要機能の使い方

### 言語切り替え

- 右上の「🌐 EN / 日本語 / 简体中文」ボタンをクリック
- クリックするたびに EN → 日本語 → 简体中文 → EN の順で切り替わります
- 設定はブラウザのLocalStorageに保存され、次回訪問時も維持されます

### 予約方法

1. **Instagram DM**: @yamaryu_bar にダイレクトメッセージ
2. **オンラインフォーム**: ページ内の予約フォームから送信

### 予約フォームの項目

- 名前（Name）
- メールアドレス（Email）
- 電話番号（Phone Number with country code）
- 希望日（Preferred Date）
- 希望時刻（Preferred Time）
- 人数（Number of Guests）
- 食事制限・アレルギー（Dietary Restrictions or Allergies）
- 特別リクエスト（Special Requests）

## 🎨 デザインガイドライン

### カラースキーム

- **プライマリレッド**: #8B0000（メインアクセント）
- **プライマリゴールド**: #D4AF37（CTAボタン、強調）
- **テキストダーク**: #2C2C2C（本文）
- **背景ライト**: #FFF8F0（セクション背景）

### フォント

- **本文**: Noto Sans JP（日本語対応）
- **見出し**: Playfair Display（高級感のあるセリフ体）

### レスポンシブブレークポイント

- **モバイル**: < 768px
- **タブレット**: 768px - 1024px
- **デスクトップ**: > 1024px

## 📞 店舗情報

- **店名**: 焼肉ばーる やま龍（YAKINIKU BAR YAMARYU）
- **住所**: 〒594-1105 大阪府和泉市のぞみ野1-2-41 イチクラビル 2階
- **電話**: 0725-25-5717
- **Instagram**: [@yamaryu_bar](https://www.instagram.com/yamaryu_bar)
- **ホットペッパー**: [公式ページ](https://www.hotpepper.jp/strJ001263382/)

### 営業時間

- **ランチ**: 11:00-14:30（L.O. 14:00）
- **ディナー**: 17:00-21:30（L.O. 21:00）
- **定休日**: 火曜日

### アクセス

- **最寄り駅**: 泉北高速鉄道「和泉中央駅」より徒歩15分
- **駐車場**: 提携駐車場あり

## 🔒 セキュリティ・プライバシー

- 予約フォームデータは暗号化された接続（HTTPS）で送信されます
- 個人情報は予約確認の目的でのみ使用されます
- ユーザーの言語設定はブラウザのLocalStorageにのみ保存されます

## 📊 今後の改善予定

- [ ] 実際の店舗写真の追加
- [ ] 予約フォームからのメール通知実装
- [ ] Google Analytics / Google Tag Manager連携
- [ ] 多言語対応の拡張（繁体字、韓国語など）
- [ ] CMSとの連携（メニュー管理）
- [ ] オンライン決済機能

## 🤝 貢献・サポート

プロジェクトに関するご質問やご提案は、以下までご連絡ください：

- **店舗直通**: 0725-25-5717
- **Instagram**: @yamaryu_bar

## 📄 ライセンス

© 2024 YAKINIKU BAR YAMARYU. All rights reserved.

---

**Last Updated**: 2026-01-08  
**Version**: 1.1.0  
**Status**: ✅ 3-Language Support Complete - Ready for Production Deploy
