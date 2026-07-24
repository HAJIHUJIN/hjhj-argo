#!/usr/bin/env node

const _0x4d2a = [
  'length', 'split', 'exec', 'chmod', 'sub.txt', 'https://arm64.ssss.nyc.mn/bot',
  '127.0.0.1', 'stream', 'http', 'https://amd64.ssss.nyc.mn/agent', 'pipe',
  'createWriteStream', 'Subscription\x20uploaded\x20successfully', 'https://api.ip.sb/geoip',
  'application/json', 'ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20is\x20empty,\x20use\x20quick\x20tunnels',
  '1900824bOnBvO', '2884144pUoMvh', 'listen', '152069LneMAn', 'vless', 'boot.log',
  '5555132kHszAn', '404618aJszgE', 'https://arm64.ssss.nyc.mn/v1', 'http://localhost:',
  'tunnel.json', '302488RngRrh', 'pkill\x20-f\x20"[', 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20',
  'https://amd64.ssss.nyc.mn/v1', '5219961xNspXJ', 'https://amd64.ssss.nyc.mn/bot',
  'https://oooo.serv00.net/add-url', '10XskIAt', 'ARM', '140660GscwWp', 'config.json',
  'https://arm64.ssss.nyc.mn/web', 'http server is running on port:', 'win32',
  '402324mZcQpC', 'https://amd64.ssss.nyc.mn/web', 'arm64', 'aarch64',
  'https://arm64.ssss.nyc.mn/agent', 'http://ip-api.com/json', 'tunnel.yml',
  'tunnel\x20--edge-ip-version\x20auto\x20--config\x20', 'TunnelSecret'
];

function _0x21ba(_0x5c423f, _0x3e18a8) {
  _0x5c423f = _0x5c423f - 0x118;
  let _0x4d2a83 = _0x4d2a[_0x5c423f];
  return _0x4d2a83;
}

(function(_0x181a95, _0x4426eb) {
  const _0x5c3389 = _0x21ba;
  while (!![]) {
    try {
      const _0x12bb94 = -parseInt(_0x5c3389(0x13d)) + -parseInt(_0x5c3389(0x12b)) * parseInt(_0x5c3389(0x118)) + parseInt(_0x5c3389(0x12e)) + -parseInt(_0x5c3389(0x134)) * -parseInt(_0x5c3389(0x12a)) + parseInt(_0x5c3389(0x136)) + -parseInt(_0x5c3389(0x11b)) + parseInt(_0x5c3389(0x126));
      if (_0x12bb94 === _0x4426eb) break; else _0x181a95['push'](_0x181a95['shift']());
    } catch (_0x550302) {
      _0x181a95['push'](_0x181a95['shift']());
    }
  }
}(_0x4d2a, 0x9330a));

const http = require('http');
const axios = require('axios');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const UPLOAD_URL = process.env.UPLOAD_URL || '';
const PROJECT_URL = process.env.PROJECT_URL || '';
const AUTO_ACCESS = process.env.AUTO_ACCESS || ![];
const FILE_PATH = process.env.FILE_PATH || '.tmp';
const SUB_PATH = process.env.SUB_PATH || 'sub';
const PORT = process.env.SERVER_PORT || process.env.PORT || 0xbb8;
const UUID = process.env.UUID || '9afd1229-b893-40c1-84dd-51e7ce204913';
const NEZHA_SERVER = process.env.NEZHA_SERVER || '';
const NEZHA_PORT = process.env.NEZHA_PORT || '';
const NEZHA_KEY = process.env.NEZHA_KEY || '';
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'nf.hjhjct.dpdns.org';
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiN2FhOWNmYTFkMDViOGYwMjY4NzYwNzRkNzBkNjI3MTgiLCJ0IjoiY2QxZmM2ZGItYWE3MC00MGQ5LWFhYWItZWYwMDU5ZWVlNWQ0IiwicyI6IlpqVTVaVGN4T1dRdFltRmhOQzAwT1RRM0xUbGpZVFF0WmpreVlUZGhOR1JtTWpZeSJ9';
const ARGO_PORT = process.env.ARGO_PORT || 0x50;
const CFIP = process.env.CFIP || 'saas.sin.fan';
const CFPORT = process.env.CFPORT || 0x1bb;
const NAME = process.env.NAME || 'NF';

if (!fs.existsSync(FILE_PATH)) {
  fs.mkdirSync(FILE_PATH);
  console.log(FILE_PATH + '\x20is\x20created');
} else {
  console.log(FILE_PATH + '\x20already\x20exists');
}

function generateRandomName() {
  const _0x27ec8c = 'abcdefghijklmnopqrstuvwxyz';
  let _0x23a31c = '';
  for (let _0x4d5b24 = 0x0; _0x4d5b24 < 0x6; _0x4d5b24++) {
    _0x23a31c += _0x27ec8c.charAt(Math.floor(Math.random() * _0x27ec8c.length));
  }
  return _0x23a31c;
}

let subContent = null;
const npmName = generateRandomName();
const webName = generateRandomName();
const botName = generateRandomName();
const phpName = generateRandomName();
let npmPath = path.join(FILE_PATH, npmName);
let phpPath = path.join(FILE_PATH, phpName);
let webPath = path.join(FILE_PATH, webName);
let botPath = path.join(FILE_PATH, botName);
let subPath = path.join(FILE_PATH, 'sub.txt');
let listPath = path.join(FILE_PATH, 'list.txt');
let bootLogPath = path.join(FILE_PATH, 'boot.log');
let configPath = path.join(FILE_PATH, 'config.json');

function deleteNodes() {
  try {
    if (!UPLOAD_URL || !fs.existsSync(subPath)) return null;
    let _0x3b0790;
    try {
      _0x3b0790 = fs.readFileSync(subPath, 'utf-8');
    } catch {
      return null;
    }
    const _0x5cd9c2 = Buffer.from(_0x3b0790, 'base64').toString('utf-8');
    const _0x2649b8 = _0x5cd9c2.split('\n').filter(_0x2280d8 => /(vless|vmess|trojan|hysteria2|tuic):\/\//.test(_0x2280d8));
    if (_0x2649b8.length === 0x0) return null;
    axios.post(UPLOAD_URL + '/api/delete-nodes', JSON.stringify({ 'nodes': _0x2649b8 }), { 'headers': { 'Content-Type': 'application/json' } }).catch(() => null);
    return null;
  } catch (_0x301e14) {
    return null;
  }
}

function cleanupOldFiles() {
  try {
    const _0x3da82c = fs.readdirSync(FILE_PATH);
    _0x3da82c.forEach(_0x2cb69b => {
      const _0x38eb76 = path.join(FILE_PATH, _0x2cb69b);
      try {
        if (fs.statSync(_0x38eb76).isFile()) fs.unlinkSync(_0x38eb76);
      } catch (_0x3eefdb) {}
    });
  } catch (_0x85ec99) {}
}

async function generateConfig() {
  const _0x39149f = {
    'log': { 'access': '/dev/null', 'error': '/dev/null', 'loglevel': 'none' },
    'inbounds': [
      { 'port': ARGO_PORT, 'protocol': 'vless', 'settings': { 'clients': [{ 'id': UUID, 'flow': 'xtls-rprx-vision' }], 'decryption': 'none', 'fallbacks': [{ 'dest': 0xbb9 }, { 'path': '/vless-argo', 'dest': 0xbba }, { 'path': '/vmess-argo', 'dest': 0xbbb }, { 'path': '/trojan-argo', 'dest': 0xbbc }] }, 'streamSettings': { 'network': 'tcp' } },
      { 'port': 0xbb9, 'listen': '127.0.0.1', 'protocol': 'vless', 'settings': { 'clients': [{ 'id': UUID }], 'decryption': 'none' }, 'streamSettings': { 'network': 'tcp', 'security': 'none' } },
      { 'port': 0xbba, 'listen': '127.0.0.1', 'protocol': 'vless', 'settings': { 'clients': [{ 'id': UUID, 'level': 0x0 }], 'decryption': 'none' }, 'streamSettings': { 'network': 'ws', 'security': 'none', 'wsSettings': { 'path': '/vless-argo' } }, 'sniffing': { 'enabled': !![], 'destOverride': ['http', 'tls', 'quic'], 'metadataOnly': ![] } },
      { 'port': 0xbbb, 'listen': '127.0.0.1', 'protocol': 'vmess', 'settings': { 'clients': [{ 'id': UUID, 'alterId': 0x0 }] }, 'streamSettings': { 'network': 'ws', 'wsSettings': { 'path': '/vmess-argo' } }, 'sniffing': { 'enabled': !![], 'destOverride': ['http', 'tls', 'quic'], 'metadataOnly': ![] } },
      { 'port': 0xbbc, 'listen': '127.0.0.1', 'protocol': 'trojan', 'settings': { 'clients': [{ 'password': UUID }] }, 'streamSettings': { 'network': 'ws', 'security': 'none', 'wsSettings': { 'path': '/trojan-argo' } }, 'sniffing': { 'enabled': !![], 'destOverride': ['http', 'tls', 'quic'], 'metadataOnly': ![] } }
    ],
    'dns': { 'servers': ['https+local://8.8.8.8/dns-query'] },
    'outbounds': [{ 'protocol': 'freedom', 'tag': 'direct' }, { 'protocol': 'blackhole', 'tag': 'block' }]
  };
  fs.writeFileSync(path.join(FILE_PATH, 'config.json'), JSON.stringify(_0x39149f, null, 0x2));
}

function getSystemArchitecture() {
  const _0x1c67e8 = _0x21ba;
  const _0x4f4f3c = os.arch();
  if (_0x4f4f3c === 'arm' || _0x4f4f3c === _0x1c67e8(0x13c) || _0x4f4f3c === _0x1c67e8(0x13d)) {
    return 'arm';
  } else {
    return 'amd';
  }
}

function downloadFile(_0x2289c0, _0x2e0bf3, _0x3a4b9c) {
  const _0x50f4a9 = _0x21ba;
  if (!fs.existsSync(FILE_PATH)) fs.mkdirSync(FILE_PATH, { 'recursive': !![] });
  const _0x1c1074 = fs.createWriteStream(_0x2289c0);
  axios({ 'method': 'get', 'url': _0x2e0bf3, 'responseType': _0x50f4a9(0x120) }).then(_0x2d863f => {
    _0x2d863f.data[_0x50f4a9(0x123)](_0x1c1074);
    _0x1c1074.on('finish', () => {
      _0x1c1074.close();
      console.log('Download\x20' + path.basename(_0x2289c0) + '\x20successfully');
      _0x3a4b9c(null, _0x2289c0);
    });
    _0x1c1074.on('error', _0x4e6b12 => {
      fs.unlink(_0x2289c0, () => {});
      const _0x3b2b1a = 'Download\x20' + path.basename(_0x2289c0) + '\x20failed:\x20' + _0x4e6b12.message;
      console.error(_0x3b2b1a);
      _0x3a4b9c(_0x3b2b1a);
    });
  }).catch(_0x56a6ec => {
    const _0x3b2a2d = 'Download\x20' + path.basename(_0x2289c0) + '\x20failed:\x20' + _0x56a6ec.message;
    console.error(_0x3b2a2d);
    _0x3a4b9c(_0x3b2a2d);
  });
}

async function downloadFilesAndRun() {
  const _0x2213da = _0x21ba;
  const _0x3cddae = getSystemArchitecture();
  const _0x1a87e5 = getFilesForArchitecture(_0x3cddae);
  if (_0x1a87e5.length === 0x0) return;
  const _0x2bd03d = _0x1a87e5.map(_0x3ff51d => new Promise((_0x5bd59c, _0x37a67f) => {
    downloadFile(_0x3ff51d.fileName, _0x3ff51d.fileUrl, (_0x4d5f47, _0x364a75) => {
      if (_0x4d5f47) _0x37a67f(_0x4d5f47); else _0x5bd59c(_0x364a75);
    });
  }));
  try {
    await Promise.all(_0x2bd03d);
  } catch (_0x2b3ea6) {
    console.error('Error\x20downloading\x20files:', _0x2b3ea6);
    return;
  }
  function _0x240ef4(_0x365a12) {
    const _0x54668b = _0x21ba;
    const _0x4299da = 0o775;
    _0x365a12.forEach(_0x2cf0cb => {
      if (fs.existsSync(_0x2cf0cb)) {
        fs[_0x54668b(0x11c)](_0x2cf0cb, _0x4299da, _0x2f1f51 => {
          if (_0x2f1f51) console.error('Empowerment\x20failed\x20for\x20' + _0x2cf0cb + ':\x20' + _0x2f1f51);
          else console.log('Empowerment\x20success\x20for\x20' + _0x2cf0cb + ':\x20' + _0x4299da.toString(0x8));
        });
      }
    });
  }
  const _0x2ec693 = NEZHA_PORT ? [npmPath, webPath, botPath] : [phpPath, webPath, botPath];
  _0x240ef4(_0x2ec693);

  if (NEZHA_SERVER && NEZHA_KEY) {
    if (!NEZHA_PORT) {
      const _0x2e1e07 = NEZHA_SERVER.includes(':') ? NEZHA_SERVER.split(':').pop() : '';
      const _0x1da259 = new Set(['443', '8443', '2096', '2087', '2083', '2053']);
      const _0x4fbf6c = _0x1da259.has(_0x2e1e07) ? 'true' : 'false';
      const _0x2d17c9 = '\nclient_secret:\x20' + NEZHA_KEY + '\ndebug:\x20false\ndisable_auto_update:\x20true\ndisable_command_execute:\x20false\ndisable_force_update:\x20true\ndisable_nat:\x20false\ndisable_send_query:\x20false\ngpu:\x20false\ninsecure_tls:\x20true\nip_report_period:\x201800\nreport_delay:\x204\nserver:\x20' + NEZHA_SERVER + '\nskip_connection_count:\x20true\nskip_procs_count:\x20true\ntemperature:\x20false\ntls:\x20' + _0x4fbf6c + '\nuse_gitee_to_upgrade:\x20false\nuse_ipv6_country_code:\x20false\nuuid:\x20' + UUID;
      fs.writeFileSync(path.join(FILE_PATH, 'config.yaml'), _0x2d17c9);
      const _0x452bd0 = 'nohup\x20' + phpPath + '\x20-c\x20"' + FILE_PATH + '/config.yaml"\x20>/dev/null\x202>&1\x20&';
      try {
        await exec(_0x452bd0);
        console.log(phpName + '\x20is\x20running');
        await new Promise(_0x2c6f1a => setTimeout(_0x2c6f1a, 0x3e8));
      } catch (_0x3ecb4c) {
        console.error('php\x20running\x20error:\x20' + _0x3ecb4c);
      }
    } else {
      let _0x280e72 = '';
      const _0x1382bd = ['443', '8443', '2096', '2087', '2083', '2053'];
      if (_0x1382bd.includes(NEZHA_PORT)) _0x280e72 = '--tls';
      const _0x1b7024 = 'nohup\x20' + npmPath + '\x20-s\x20' + NEZHA_SERVER + ':' + NEZHA_PORT + '\x20-p\x20' + NEZHA_KEY + '\x20' + _0x280e72 + '\x20--disable-auto-update\x20--report-delay\x204\x20--skip-conn\x20--skip-procs\x20>/dev/null\x202>&1\x20&';
      try {
        await exec(_0x1b7024);
        console.log(npmName + '\x20is\x20running');
        await new Promise(_0x2cb37a => setTimeout(_0x2cb37a, 0x3e8));
      } catch (_0x2fa54f) {
        console.error('npm\x20running\x20error:\x20' + _0x2fa54f);
      }
    }
  } else {
    console.log('NEZHA\x20variable\x20is\x20empty,skip\x20running');
  }

  const _0x1eeed2 = 'nohup\x20' + webPath + '\x20-c\x20' + FILE_PATH + '/config.json\x20>/dev/null\x202>&1\x20&';
  try {
    await exec(_0x1eeed2);
    console.log(webName + '\x20is\x20running');
    await new Promise(_0x298bd2 => setTimeout(_0x298bd2, 0x3e8));
  } catch (_0x55e098) {
    console.error('web\x20running\x20error:\x20' + _0x55e098);
  }

  if (fs.existsSync(botPath)) {
    let _0x48d2e8;
    if (ARGO_AUTH.match(/^[A-Z0-9a-z=]{120,250}$/)) {
      _0x48d2e8 = 'tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20' + ARGO_AUTH;
    } else if (ARGO_AUTH.match(/TunnelSecret/)) {
      _0x48d2e8 = _0x2213da(0x118) + FILE_PATH + '/tunnel.yml\x20run';
    } else {
      _0x48d2e8 = _0x2213da(0x137) + FILE_PATH + '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT;
    }
    try {
      await exec('nohup\x20' + botPath + '\x20' + _0x48d2e8 + '\x20>/dev/null\x202>&1\x20&');
      console.log(botName + '\x20is\x20running');
      await new Promise(_0x19f565 => setTimeout(_0x19f565, 0x7d0));
    } catch (_0x1a7192) {
      console.error('Error\x20executing\x20command:\x20' + _0x1a7192);
    }
  }
  await new Promise(_0x4aa66b => setTimeout(_0x4aa66b, 0x1388));
}

function getFilesForArchitecture(_0x2f9dd3) {
  const _0x55dc69 = _0x21ba;
  let _0x3e1855;
  if (_0x2f9dd3 === 'arm') {
    _0x3e1855 = [{ 'fileName': webPath, 'fileUrl': _0x55dc69(0x141) }, { 'fileName': botPath, 'fileUrl': _0x55dc69(0x11e) }];
  } else {
    _0x3e1855 = [{ 'fileName': webPath, 'fileUrl': _0x55dc69(0x119) }, { 'fileName': botPath, 'fileUrl': _0x55dc69(0x13a) }];
  }
  if (NEZHA_SERVER && NEZHA_KEY) {
    if (NEZHA_PORT) {
      const _0x4e61f2 = _0x2f9dd3 === 'arm' ? _0x55dc69(0x13e) : _0x55dc69(0x122);
      _0x3e1855.unshift({ 'fileName': npmPath, 'fileUrl': _0x4e61f2 });
    } else {
      const _0x2a3dcb = _0x2f9dd3 === 'arm' ? _0x55dc69(0x131) : _0x55dc69(0x138);
      _0x3e1855.unshift({ 'fileName': phpPath, 'fileUrl': _0x2a3dcb });
    }
  }
  return _0x3e1855;
}

function argoType() {
  const _0x3d0cf3 = _0x21ba;
  if (!ARGO_AUTH || !ARGO_DOMAIN) {
    console.log(_0x3d0cf3(0x128));
    return;
  }
  if (ARGO_AUTH.includes(_0x3d0cf3(0x11a))) {
    fs.writeFileSync(path.join(FILE_PATH, _0x3d0cf3(0x133)), ARGO_AUTH);
    const _0x1c83fa = '\n\x20\x20tunnel:\x20' + ARGO_AUTH.split('"')[0xb] + '\n\x20\x20credentials-file:\x20' + path.join(FILE_PATH, 'tunnel.json') + '\n\x20\x20protocol:\x20http2\n\x20\x20\n\x20\x20ingress:\n\x20\x20\x20\x20-\x20hostname:\x20' + ARGO_DOMAIN + '\n\x20\x20\x20\x20\x20\x20service:\x20http://localhost:' + ARGO_PORT + '\n\x20\x20\x20\x20\x20\x20originRequest:\n\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\n\x20\x20\x20\x20-\x20service:\x20http_status:404\n\x20\x20';
    fs.writeFileSync(path.join(FILE_PATH, _0x3d0cf3(0x13f)), _0x1c83fa);
  } else {
    console.log('Using\x20token\x20connect\x20to\x20tunnel,\x20please\x20set\x20' + ARGO_PORT + '\x20in\x20clouudflare');
  }
}

async function extractDomains() {
  const _0x269cc6 = _0x21ba;
  let _0x9f55e5;
  if (ARGO_AUTH && ARGO_DOMAIN) {
    _0x9f55e5 = ARGO_DOMAIN;
    console.log('ARGO_DOMAIN:', _0x9f55e5);
    await generateLinks(_0x9f55e5);
  } else {
    try {
      const _0x2fa5dc = fs.readFileSync(path.join(FILE_PATH, _0x269cc6(0x12e)), 'utf-8');
      const _0x3c2ef3 = _0x2fa5dc.split('\n');
      const _0x1e3a1f = [];
      _0x3c2ef3.forEach(_0x4ef278 => {
        const _0x247bd0 = _0x4ef278.match(/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
        if (_0x247bd0) _0x1e3a1f.push(_0x247bd0[0x1]);
      });
      if (_0x1e3a1f.length > 0x0) {
        _0x9f55e5 = _0x1e3a1f[0x0];
        console.log('ArgoDomain:', _0x9f55e5);
        await generateLinks(_0x9f55e5);
      } else {
        console.log('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain');
        fs.unlinkSync(path.join(FILE_PATH, _0x269cc6(0x12e)));
        async function _0x3efc21() {
          const _0x310461 = _0x21ba;
          try {
            if (process.platform === _0x310461(0x118)) await exec('taskkill\x20/f\x20/im\x20' + botName + '.exe\x20>\x20nul\x202>&1');
            else await exec(_0x310461(0x135) + botName.charAt(0x0) + ']' + botName.substring(0x1) + '"\x20>\x20/dev/null\x202>&1');
          } catch (_0x386df2) {}
        }
        _0x3efc21();
        await new Promise(_0x2a9ee2 => setTimeout(_0x2a9ee2, 0xbb8));
        const _0x4ef5ed = _0x269cc6(0x137) + FILE_PATH + '/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:' + ARGO_PORT;
        try {
          await exec('nohup\x20' + botPath + '\x20' + _0x4ef5ed + '\x20>/dev/null\x202>&1\x20&');
          console.log(botName + '\x20is\x20running');
          await new Promise(_0x1b1f81 => setTimeout(_0x1b1f81, 0xbb8));
          await extractDomains();
        } catch (_0x2a59a7) {
          console.error('Error\x20executing\x20command:\x20' + _0x2a59a7);
        }
      }
    } catch (_0x5c421d) {
      console.error('Error\x20reading\x20boot.log:', _0x5c421d);
    }
  }
}

async function getMetaInfo() {
  const _0x29643d = _0x21ba;
  try {
    const _0x1c8b32 = await axios.get(_0x29643d(0x126), { 'headers': { 'User-Agent': 'Mozilla/5.0', 'timeout': 0xbb8 } });
    if (_0x1c8b32.data && _0x1c8b32.data.country_code && _0x1c8b32.data.isp) {
      return (_0x1c8b32.data.country_code + '-' + _0x1c8b32.data.isp).replace(/\s+/g, '_');
    }
  } catch (_0x2dd1c6) {
    try {
      const _0x187a82 = await axios.get(_0x29643d(0x13f), { 'headers': { 'User-Agent': 'Mozilla/5.0', 'timeout': 0xbb8 } });
      if (_0x187a82.data && _0x187a82.data.status === 'success' && _0x187a82.data.countryCode && _0x187a82.data.org) {
        return (_0x187a82.data.countryCode + '-' + _0x187a82.data.org).replace(/\s+/g, '_');
      }
    } catch (_0x39a0ff) {}
  }
  return 'Unknown';
}

async function generateLinks(_0x4254f1) {
  const _0x10d182 = await getMetaInfo();
  const _0x1e3ca0 = NAME ? NAME + '-' + _0x10d182 : _0x10d182;
  return new Promise(_0x27242d => {
    setTimeout(() => {
      const _0x5bfdcf = { 'v': '2', 'ps': '' + _0x1e3ca0, 'add': CFIP, 'port': CFPORT, 'id': UUID, 'aid': '0', 'scy': 'auto', 'net': 'ws', 'type': 'none', 'host': _0x4254f1, 'path': '/vmess-argo?ed=2560', 'tls': 'tls', 'sni': _0x4254f1, 'alpn': '', 'fp': 'firefox' };
      const _0x14e0ae = '\nvless://' + UUID + '@' + CFIP + ':' + CFPORT + '?encryption=none&security=tls&sni=' + _0x4254f1 + '&fp=firefox&type=ws&host=' + _0x4254f1 + '&path=%2Fvless-argo%3Fed%3D2560#' + _0x1e3ca0 + '\n\nvmess://' + Buffer.from(JSON.stringify(_0x5bfdcf)).toString('base64') + '\n\ntrojan://' + UUID + '@' + CFIP + ':' + CFPORT + '?security=tls&sni=' + _0x4254f1 + '&fp=firefox&type=ws&host=' + _0x4254f1 + '&path=%2Ftrojan-argo%3Fed%3D2560#' + _0x1e3ca0 + '\n\x20\x20\x20\x20';
      console.log(Buffer.from(_0x14e0ae).toString('base64'));
      fs.writeFileSync(subPath, Buffer.from(_0x14e0ae).toString('base64'));
      console.log(FILE_PATH + '/sub.txt\x20saved\x20successfully');
      subContent = Buffer.from(_0x14e0ae).toString('base64');
      uploadNodes();
      _0x27242d(_0x14e0ae);
    }, 0x7d0);
  });
}

async function uploadNodes() {
  const _0x1a868f = _0x21ba;
  if (UPLOAD_URL && PROJECT_URL) {
    const _0x589efc = PROJECT_URL + '/' + SUB_PATH;
    const _0x1d58bc = { 'subscription': [_0x589efc] };
    try {
      const _0x2fa581 = await axios.post(UPLOAD_URL + '/api/add-subscriptions', _0x1d58bc, { 'headers': { 'Content-Type': 'application/json' } });
      if (_0x2fa581 && _0x2fa581.status === 0xc8) {
        console.log(_0x1a868f(0x125));
        return _0x2fa581;
      }
      return null;
    } catch (_0x5c421f) {
      if (_0x5c421f.response && _0x5c421f.response.status === 0x190) {}
    }
  } else if (UPLOAD_URL) {
    if (!fs.existsSync(listPath)) return;
    const _0x2c0023 = fs.readFileSync(listPath, 'utf-8');
    const _0x2fb08a = _0x2c0023.split('\n').filter(_0x2213e8 => /(vless|vmess|trojan|hysteria2|tuic):\/\//.test(_0x2213e8));
    if (_0x2fb08a.length === 0x0) return;
    const _0x4b7b39 = JSON.stringify({ 'nodes': _0x2fb08a });
    try {
      const _0x8e87d0 = await axios.post(UPLOAD_URL + '/api/add-nodes', _0x4b7b39, { 'headers': { 'Content-Type': 'application/json' } });
      if (_0x8e87d0 && _0x8e87d0.status === 0xc8) {
        console.log('Nodes\x20uploaded\x20successfully');
        return _0x8e87d0;
      }
      return null;
    } catch (_0x48f5a1) {
      return null;
    }
  }
}

function cleanFiles() {
  setTimeout(() => {
    const _0x41d6b0 = [bootLogPath, configPath, webPath, botPath];
    if (NEZHA_PORT) _0x41d6b0.push(npmPath); else if (NEZHA_SERVER && NEZHA_KEY) _0x41d6b0.push(phpPath);
    if (process.platform === 'win32') {
      exec('del\x20/f\x20/q\x20' + _0x41d6b0.join('\x20') + '\x20>\x20nul\x202>&1', () => {
        console.clear();
        console.log('App\x20is\x20running');
        console.log('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!');
      });
    } else {
      exec('rm\x20-rf\x20' + _0x41d6b0.join('\x20') + '\x20>/dev/null\x202>&1', () => {
        console.clear();
        console.log('App\x20is\x20running');
        console.log('Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!');
      });
    }
  }, 0x15f90);
}
cleanFiles();

async function AddVisitTask() {
  const _0x534f59 = _0x21ba;
  if (!AUTO_ACCESS || !PROJECT_URL) {
    console.log('Skipping\x20adding\x20automatic\x20access\x20task');
    return;
  }
  try {
    const _0x301e18 = await axios.post(_0x534f59(0x13b), { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': 'application/json' } });
    console.log('automatic\x20access\x20task\x20added\x20successfully');
    return _0x301e18;
  } catch (_0x482f3a) {
    console.error('Add\x20automatic\x20access\x20task\x20faild:\x20' + _0x482f3a.message);
    return null;
  }
}

async function startserver() {
  try {
    argoType();
    deleteNodes();
    cleanupOldFiles();
    await generateConfig();
    await downloadFilesAndRun();
    await extractDomains();
    await AddVisitTask();
  } catch (_0x3a4b0d) {
    console.error('Error\x20in\x20startserver:', _0x3a4b0d);
  }
}
startserver().catch(_0x5c4f2a => console.error('Unhandled\x20error\x20in\x20startserver:', _0x5c4f2a));

const server = http.createServer(async (_0x1a87b1, _0x2f9da8) => {
  const _0x56a6ec = _0x1a87b1.url.split('?')[0x0];
  if (_0x56a6ec === '/' + SUB_PATH) {
    if (subContent) {
      _0x2f9da8.writeHead(0xc8, { 'Content-Type': 'text/plain;\x20charset=utf-8' });
      _0x2f9da8.end(subContent);
    } else {
      try {
        const _0x2289c0 = fs.readFileSync(subPath, 'utf-8');
        _0x2f9da8.writeHead(0xc8, { 'Content-Type': 'text/plain;\x20charset=utf-8' });
        _0x2f9da8.end(_0x2289c0);
      } catch (_0x3a4b9c) {
        _0x2f9da8.writeHead(0x1f7, { 'Content-Type': 'text/plain;\x20charset=utf-8' });
        _0x2f9da8.end('Subscription\x20content\x20not\x20yet\x20available,\x20please\x20try\x20again\x20later.');
      }
    }
    return;
  }
  if (_0x56a6ec === '/') {
    try {
      const _0x1c1074 = path.join(__dirname, 'index.html');
      const _0x2d863f = await fs.promises.readFile(_0x1c1074, 'utf8');
      _0x2f9da8.writeHead(0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' });
      _0x2f9da8.end(_0x2d863f);
    } catch (_0x4e6b12) {
      _0x2f9da8.writeHead(0xc8, { 'Content-Type': 'text/html;\x20charset=utf-8' });
      _0x2f9da8.end('Hello\x20world!<br><br>You\x20can\x20access\x20/{SUB_PATH}(Default:\x20/sub)\x20to\x20get\x20your\x20nodes!');
    }
    return;
  }
  _0x2f9da8.writeHead(0x194, { 'Content-Type': 'text/plain;\x20charset=utf-8' });
  _0x2f9da8.end('Not\x20Found');
});

server.listen(PORT, () => console.log('http\x20server\x20is\x20running\x20on\x20port:' + PORT + '!'));
