# Benchmark

Compare repo between expressjs and nanoexpress (Pro) without any modification (out-of-the-box)

## Usage

1. Install Debian or any Linux OS
2. Install **wrk**
3. Install `docker`, `docker-compose` and etc, configure it
4. Start test containers via `docker-compose up -d` and Test via `wrk`

## Results

Almost 3-x faster than expressjs

```bash
~
❯ wrk -c8 -t8 -d60  http://localhost:4200/time
Running 1m test @ http://localhost:4200/time
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   188.99us  218.96us  17.18ms   97.72%
    Req/Sec     5.88k   472.61     8.56k    82.54%
  2808875 requests in 1.00m, 736.66MB read
Requests/sec:  46736.89
Transfer/sec:     12.26MB
~ took 1m
❯ wrk -c8 -t8 -d60  http://localhost:4100/time
Running 1m test @ http://localhost:4100/time
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    71.53us   48.08us   7.54ms   98.93%
    Req/Sec    14.10k   320.84    14.62k    84.90%
  6745752 requests in 1.00m, 0.90GB read
Requests/sec: 112243.11
Transfer/sec:     15.31MB
~ took 1m
❯ wrk -c8 -t8 -d60  http://localhost:4300/time
Running 1m test @ http://localhost:4300/time
  8 threads and 8 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    62.87us   37.68us   8.32ms   98.91%
    Req/Sec    15.88k   274.27    16.46k    84.59%
  7597597 requests in 1.00m, 695.58MB read
Requests/sec: 126417.81
Transfer/sec:     11.57MB
~ took 1m
❯

```

## Machines

- Macbook M1 16GB/512G 8-Core
- iMac 5K Late-2014 i7 32GB/256G
- Custom-build High-end PC with i9-9900K and all other top components from 2019 year
- Raspberry Pi 4 4GB/256G SSD

## Build performance

| Machine / Build | INIT | FCB | B   | AVG  | CPU            | RAM            | Disk (R/W) | FS       | OS            | Environment    | Is VM?            |
| --------------- | ---- | --- | --- | ---- | -------------- | -------------- | ---------- | -------- | ------------- | -------------- | ----------------- |
| Macbook M1      | 40   | 12  | 0.4 | 17.5 | Apple M1       | LPDDR4 3200Mhz | ~3000 MB   | VirtioFS | macOS 12.4+   | Docker Engine  | Ubuntu Server     |
| Custom PC       | 35   | 15  | 3   | 17.7 | Core i9-9900K  | DDR4 3466Mhz   | ~3000 MB   | Native   | Manjaro       | Docker Engine  |
| Custom PC       | 40   | 13  | 2   | 18.3 | Core i9-9900K  | DDR4 3466Mhz   | ~3000 MB   | Hyper-V  | Windows 10    | Docker Desktop | Hyper-V           |
| iMac 5K 12.5    | 44   | 13  | 3   | 20   | Core i7-4790K  | DDR3 1600Mhz   | ~600 MB    | VirtioFS | macOS 12.4+   | Docker Desktop |
| Custom PC       | 43   | 17  | 2   | 20.7 | Core i9-9900K  | DDR4 3466Mhz   | ~3000 MB   | Native   | Windows 10    | Docker Desktop | WSL2              |
| Macbook M1      | 48   | 14  | 3   | 21.7 | Apple M1       | LPDDR4 3200Mhz | ~3000 MB   | VirtioFS | macOS 12.4+   | Docker Desktop |
| VPS             | 51   | 14  | 1   | 22   | Xeon SKL 1x2.2 | Server         | ~200 MB    | KVM      | Debian 11.4+  | Docker Engine  |
| iMac 5K PD      | 57   | 12  | 0.6 | 23.2 | Core i7-4790K  | DDR3 1600Mhz   | ~600 MB    | Hyperkit | macOS 12.4+   | Docker Engine  | Parallels Desktop |
| iMac 5K MP      | 68   | 13  | 0.7 | 27.2 | Core i7-4790K  | DDR3 1600Mhz   | ~600 MB    | Hyperkit | macOS 12.4+   | Docker Engine  | Mutlipass         |
| Custom PC       | 79   | 14  | 0.4 | 31.1 | Core i9-9900K  | DDR4 3466Mhz   | ~3000 MB   | Native   | Ubuntu 22.04+ | Docker Engine  |
| iMac 5K         | 76   | 18  | 6   | 33.3 | Core i7-4790K  | DDR3 1600Mhz   | ~600 MB    | Hyperkit | macOS 11.5    | Docker Desktop |
| RPI 4 OC1850    | 83   | 15  | 2   | 33.3 | Broadcom       | LPDDR4 2133Mhz | ~200 MB    | Native   | Debian 11.4+  | Docker Engine  |
| RPI 4           | 93   | 15  | 2   | 36.7 | Broadcom       | LPDDR4 2133Mhz | ~200 MB    | Native   | Debian 11.4+  | Docker Engine  |

**INIT** - Initial first build without any cache or buildkit optimizations

**FCB** - `--build --force-recreate` with Docker internal optimizations

**B** - `--build` only with Docker internal optimizations. **Live-reload** performance should around this

## License

MIT
