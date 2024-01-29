#!/usr/bin/env node
import boxen from 'boxen'
import whichPMRuns from 'which-pm-runs'

const boxenOpts = { borderColor: 'red', borderStyle: 'double', padding: 1 }

const pms = [
  { name: 'npm', url: '', install: '', command: 'npm install' },
  { name: 'cnpm', url: '', install: '', command: 'cnpm install' },
  {
    name: 'pnpm',
    url: 'https://pnpm.js.org/',
    install: 'npm i -g pnpm',
    command: 'pnpm install'
  },
  {
    name: 'yarn',
    url: 'https://yarnpkg.com/',
    install: 'npm i -g yarn',
    command: 'yarn'
  },
  {
    name: 'bun',
    url: 'https://bun.sh/',
    install: 'npm install -g bun',
    command: 'bun install'
  }
]

function showHelp(wantedPM) {
  const found = pms.find((pm) => pm.name === wantedPM)

  if (!found) {
    return
  }

  let desc = `Use "${found.command}" for installation in this project.`

  if (found.install) {
    desc += `\n\nIf you don't have ${found.name}, install it via "${found.install}".`
  }

  if (found.url) {
    desc += `\nFor more details, go to ${found.url}`
  }

  console.log(boxen(desc, boxenOpts))
}

const options = pms.map((pm) => pm.name)

const argv = process.argv.slice(2)

if (argv.length === 0) {
  console.log(
    `Please specify the wanted package manager: only-allow <${options.join(
      '|'
    )}>`
  )
  process.exit(1)
}

const wantedPM = argv[0]

if (!options.includes(wantedPM)) {
  console.log(
    `"${wantedPM}" is not a valid package manager. Available package managers are: ${options
      .join(', ')
      .replace(/, ([^,]*)$/, ' or $1')}.`
  )
  process.exit(1)
}

const usedPM = whichPMRuns()
const cwd = process.env.INIT_CWD || process.cwd()
const isInstalledAsDependency = cwd.includes('node_modules')

if (usedPM && usedPM.name !== wantedPM && !isInstalledAsDependency) {
  showHelp(wantedPM)
  process.exit(1)
}
