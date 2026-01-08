# Vercelへのデプロイ手順

## 前提条件
- Vercelアカウント（https://vercel.com/signup）
- GitHubアカウント（推奨）

## 方法1: GitHub経由でデプロイ（推奨）

### ステップ1: GitHubにリポジトリを作成
1. GitHub（https://github.com/new）で新しいリポジトリを作成
2. リポジトリ名: `yamaryu-yakiniku-lp`（任意）
3. PublicまたはPrivateを選択

### ステップ2: コードをGitHubにプッシュ
```bash
cd /home/user/webapp
git remote add origin https://github.com/YOUR_USERNAME/yamaryu-yakiniku-lp.git
git branch -M main
git push -u origin main
```

### ステップ3: VercelでGitHubリポジトリをインポート
1. Vercel（https://vercel.com/dashboard）にログイン
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」でGitHubリポジトリを選択
4. プロジェクト設定:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. 「Deploy」をクリック

### ステップ4: デプロイ完了
- 数分後、デプロイが完了します
- URLが発行されます: `https://yamaryu-yakiniku-lp.vercel.app`

---

## 方法2: Vercel CLI経由でデプロイ

### ステップ1: Vercel CLIをインストール（ローカルマシンで）
```bash
npm install -g vercel
```

### ステップ2: Vercelにログイン
```bash
vercel login
```

### ステップ3: プロジェクトをデプロイ
```bash
cd /home/user/webapp
vercel
```

### ステップ4: 本番環境にデプロイ
```bash
vercel --prod
```

---

## 方法3: Vercel Web UI経由で直接デプロイ

### ステップ1: プロジェクトをZIPファイルにする
```bash
cd /home/user
tar -czf yamaryu-webapp.tar.gz webapp/
```

### ステップ2: Vercelにアップロード
1. Vercel（https://vercel.com/dashboard）にログイン
2. 「Add New...」→「Project」をクリック
3. 「Deploy from Git」の代わりに、「Deploy without Git」を選択（ベータ機能）
4. ZIPファイルをアップロード

**注意**: この方法は推奨されません。GitHub経由の方が便利です。

---

## プロジェクト設定（重要）

### vercel.json（既に作成済み）
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/_worker.js"
    }
  ]
}
```

### 環境変数（必要な場合）
Vercelダッシュボードで設定:
- Settings → Environment Variables

---

## デプロイ後の確認

### 1. URLの確認
Vercelから発行されたURLにアクセス:
```
https://your-project-name.vercel.app
```

### 2. 動作確認
- [ ] メインビジュアルが表示される
- [ ] 言語切り替えが動作する（EN/日本語/中国語）
- [ ] メニュー写真が正しく表示される
- [ ] 予約フォームが動作する
- [ ] レスポンシブデザインが動作する

### 3. カスタムドメイン（オプション）
Vercelダッシュボード → Settings → Domains で独自ドメインを設定可能

---

## トラブルシューティング

### ビルドエラーが発生した場合
```bash
# ローカルでビルドを確認
cd /home/user/webapp
npm run build

# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 画像が表示されない場合
- `public/images/` ディレクトリが正しくデプロイされているか確認
- 画像のパスが `/images/xxx.jpg` になっているか確認

### 言語切り替えが動作しない場合
- ブラウザのキャッシュをクリア（Ctrl+F5 / Cmd+Shift+R）
- JavaScriptエラーがないか確認（開発者ツールのConsole）

---

## サポート情報

### プロジェクト情報
- **プロジェクト名**: YAMARYU Yakiniku LP
- **フレームワーク**: Hono (Cloudflare Workers/Pages)
- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `dist`

### Vercelドキュメント
- 公式ドキュメント: https://vercel.com/docs
- Hono + Vercel: https://hono.dev/getting-started/vercel

---

## 次のステップ

1. ✅ GitHubにコードをプッシュ
2. ✅ Vercelでプロジェクトをインポート
3. ✅ デプロイ
4. ✅ URLを確認
5. ✅ カスタムドメインを設定（オプション）

**推奨**: 方法1（GitHub経由）が最も簡単で、自動デプロイも設定できます！
