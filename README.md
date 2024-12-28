# hono-openapi-practice
HonoのOpenAPIによる練習用リポジトリ

# hono-openapi-practice

Hono の OpenAPI による練習用リポジトリ

- バックエンドとしての利用
  - Zod OpenAPI ベースの REST API
  - Swagger UI まで自動生成
- BFF としての利用
  - エンドポイントは Hasura による GraphQLなど
  - Next.jsフロントエンドのときはRPCが充実しているHonoでREST APIにするのが扱いやすそう
    - GraphQLはNestJSの方がエコシステムも充実しているので(初期構築も早く、長期的にも戦いやすい)、NestJSをBFFとして良さそう

## 参考

- 環境構築
  - https://zenn.dev/slowhand/articles/30c6bc9fd418ab
- Hono を用いたアーキテクチャ
  - https://speakerdeck.com/sugarcat7/honodeshi-xian-surubatukuendokai-fa-noima
- Hono で作る REST API
  - https://zenn.dev/slowhand/articles/b7872e09b84e15
- Zod
  - https://zenn.dev/uttk/articles/bd264fa884e026

