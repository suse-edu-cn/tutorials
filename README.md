# 新手 SUSEer 的快速上手指南！

哈喽哇！欢迎各位新 SUSEer 加入我校“开放原子开源协会”的项目实践部！为了让大家能够从零基础开始顺利学习相关技术，我们特别制作了本指南，希望指引你一步步点亮编程的技能树~

### 如何部署
在拥有 NodeJS 18 及以上版本的环境运行：
```shell
git clone https://github.com/suse-edu-cn/tutorials
cd tutorials
npm install pnpm -g # 已安装 PNPM 可忽略此步骤
pnpm install
```
本地修改 & 预览：
```shell
pnpm dev
```
打包生产环境部署的页面：
```shell
pnpm build
```