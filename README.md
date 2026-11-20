# 供热运行收件

该项目归集供热遥测、设备关系、维修记录和居民报修，为值守人员整理区域运行线索。`fixtures/observations.json` 含合成的设备世代、拓扑与事件资料，不代表真实住户、供热服务或处置结果。

本地环境使用 Node.js 22。运行 `npm test` 可检查合成资料是否可解析；容器环境可运行 `docker build -t heating-operations-inbox .`，随后运行 `docker run --rm heating-operations-inbox`。
