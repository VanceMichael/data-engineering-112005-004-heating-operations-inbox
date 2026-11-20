import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('演练资料能追踪设备世代、区域拓扑与维修事件', async () => {
  const data = JSON.parse(await readFile(new URL('../fixtures/observations.json', import.meta.url), 'utf8'));
  assert.equal(data.fixture_kind, 'synthetic');
  assert.ok(data.records.some((record) => record.type === 'work-order'));
  assert.equal(data.records.filter((record) => record.id === 'T-3').length, 2);
});
