# Gold Letters — 日本語LP

デジタル箔押し機「Gold Letters」（Miller Systems）の日本市場向けランディングページ。
`oki.com` のコーポレートデザイン（レッド `#e60012` × クリーンなグリッド）を参照したスタイル。

## 構成
- `index.html` — LP本体
- `assets/css/style.css` — スタイル（OKI風 / レスポンシブ）
- `assets/js/main.js` — インタラクション（メニュー、FAQ、スクロール演出、フォーム）
- `docs/LP構成.md` — LP構成書（セクション設計・ターゲット・CTA設計）

## ローカルで確認
```bash
# 任意の静的サーバで開く
python3 -m http.server 8000
# → http://localhost:8000
```

## 差し替え予定
- ヒーロー／製品写真・加工サンプル画像（現状はプレースホルダー）→ `assets/img/`
- お問い合わせフォームの送信先（バックエンド／フォームサービス連携）
- 価格・カタログPDF・各SNS/外部リンクの実URL
