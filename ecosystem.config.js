module.exports = {
  apps: [
    { name: 'frontend', script: 'apps/frontend', exec_mode: 'fork', instances: 1 },
    { name: 'backend', script: 'apps/backend', exec_mode: 'fork', instances: 1 },
    { name: 'workers', script: 'apps/workers', exec_mode: 'fork', instances: 1 },
    { name: 'cron', script: 'apps/cron', exec_mode: 'fork', instances: 1 },
  ]
}
