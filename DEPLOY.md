# Cloudflare Pages デプロイ手順書

このドキュメントは、焼肉ばーる やま龍のウェブサイトをCloudflare Pagesにデプロイする手順を説明します。

## 📋 事前準備

### 1. Cloudflare アカウント

- Cloudflareアカウントを持っていない場合: https://dash.cloudflare.com/sign-up
- 無料プランで十分です

### 2. Cloudflare API Token の取得

1. https://dash.cloudflare.com/profile/api-tokens にアクセス
2. 「Create Token」をクリック
3. 「Edit Cloudflare Workers」テンプレートを使用
4. または、カスタムトークンで以下の権限を付与：
   - **Account Settings**: Read
   - **Cloudflare Pages**: Edit
   - **Account Resources**: Include - All accounts
5. 「Continue to summary」→「Create Token」
6. トークンをコピーして安全に保管

## 🚀 デプロイ方法

### オプション1: Wrangler CLI（推奨）

#### ステップ1: Cloudflare認証

```bash
cd /home/user/webapp

# API Tokenを環境変数に設定
export CLOUDFLARE_API_TOKEN="your-api-token-here"

# 認証確認
npx wrangler whoami
```

#### ステップ2: プロジェクト作成（初回のみ）

```bash
npx wrangler pages project create yamaryu-yakiniku \
  --production-branch main \
  --compatibility-date 2026-01-08
```

#### ステップ3: デプロイ実行

```bash
# ビルド
npm run build

# デプロイ
npx wrangler pages deploy dist --project-name yamaryu-yakiniku
```

#### ステップ4: デプロイ確認

デプロイ完了後、以下のURLでアクセスできます：

- **本番環境**: https://yamaryu-yakiniku.pages.dev
- **プレビュー**: https://main.yamaryu-yakiniku.pages.dev

---

### オプション2: Cloudflare Dashboard（GUI）

#### ステップ1: GitHubリポジトリにプッシュ

まず、コードをGitHubにプッシュします：

```bash
cd /home/user/webapp

# GitHubリモートを追加（あなたのリポジトリURL）
git remote add origin https://github.com/YOUR_USERNAME/yamaryu-yakiniku.git

# プッシュ
git push -u origin main
```

#### ステップ2: Cloudflare DashboardでPages設定

1. https://dash.cloudflare.com/ にログイン
2. 左メニューから「Workers & Pages」を選択
3. 「Create application」→「Pages」→「Connect to Git」
4. GitHubアカウントを接続
5. リポジトリ「yamaryu-yakiniku」を選択
6. ビルド設定を入力：
   - **Project name**: yamaryu-yakiniku
   - **Production branch**: main
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
7. 「Save and Deploy」をクリック

#### ステップ3: 自動デプロイ

以降、mainブランチへのpushで自動的にデプロイされます。

---

## 🔧 トラブルシューティング

### エラー: "Project name already exists"

別のプロジェクト名を試してください：

```bash
# プロジェクト名にランダムな数字を追加
npx wrangler pages project create yamaryu-yakiniku-2 \
  --production-branch main

# デプロイ
npx wrangler pages deploy dist --project-name yamaryu-yakiniku-2
```

### エラー: "Authentication failed"

```bash
# トークンを再設定
export CLOUDFLARE_API_TOKEN="your-new-token-here"

# または、インタラクティブログイン
npx wrangler login
```

### ビルドエラー

```bash
# 依存関係の再インストール
rm -rf node_modules package-lock.json
npm install

# クリーンビルド
npm run build
```

---

## 📝 デプロイ後の設定

### カスタムドメインの追加（オプション）

1. Cloudflare Dashboardで「Workers & Pages」→プロジェクト選択
2. 「Custom domains」タブ
3. 「Set up a custom domain」をクリック
4. ドメイン名を入力（例: yamaryu.com）
5. DNS設定に従ってCNAMEレコードを追加

### 環境変数の設定（将来的に必要な場合）

```bash
# APIキーなどの秘密情報を設定
npx wrangler pages secret put API_KEY --project-name yamaryu-yakiniku

# または、Dashboardで設定：
# Settings → Environment variables → Add variable
```

---

## 🔄 更新・再デプロイ

### コード変更後の再デプロイ

```bash
cd /home/user/webapp

# 変更をコミット
git add .
git commit -m "Update content"

# ビルド
npm run build

# 再デプロイ
npx wrangler pages deploy dist --project-name yamaryu-yakiniku
```

---

## 📊 デプロイステータス確認

```bash
# デプロイメント履歴の確認
npx wrangler pages deployment list --project-name yamaryu-yakiniku

# プロジェクト情報の確認
npx wrangler pages project list
```

---

## ✅ デプロイチェックリスト

デプロイ前に以下を確認してください：

- [ ] `npm run build` が成功する
- [ ] `dist/` ディレクトリに `_worker.js` が生成される
- [ ] ローカルで動作確認済み（PM2テスト）
- [ ] Cloudflare API Tokenを取得済み
- [ ] プロジェクト名を決定（yamaryu-yakiniku）
- [ ] README.mdに本番URLを記載する準備

---

## 📞 サポート

デプロイに問題がある場合：

1. **Wranglerのバージョン確認**: `npx wrangler --version`
2. **ログの確認**: `npx wrangler pages deployment tail --project-name yamaryu-yakiniku`
3. **Cloudflare Community**: https://community.cloudflare.com/

---

**プロジェクト名**: yamaryu-yakiniku  
**最終更新日**: 2026-01-08  
**ステータス**: デプロイ準備完了
