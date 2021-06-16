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

## Machine

Command got via `neofetch`

```bash
❯ neofetch
            .-/+oossssoo+/-.               dalisoft@dalisoft-ubuntu
        `:+ssssssssssssssssss+:`           ------------------------
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 20.04.2 LTS x86_64
    .ossssssssssssssssssdMMMNysssso.       Host: Z390 AORUS PRO WIFI
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 5.8.0-55-generic
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 1 hour, 11 mins
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 2437 (dpkg)
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: fish 3.1.0
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 3840x2160
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   DE: GNOME
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   WM: Mutter
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   WM Theme: Adwaita
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Theme: WhiteSur-light [GTK2/3]
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    Icons: WhiteSur [GTK2/3]
  +sssssssssdmydMMMMMMMMddddyssssssss+     Terminal: gnome-terminal
   /ssssssssssshdmNNNNmyNMMMMhssssss/      CPU: Intel i9-9900K (16) @ 5.000GHz
    .ossssssssssssssssssdMMMNysssso.       GPU: NVIDIA GeForce RTX 2080 Ti Rev.
      -+sssssssssssssssssyyyssss+-         Memory: 4313MiB / 64131MiB
        `:+ssssssssssssssssss+:`
            .-/+oossssoo+/-.
```

## License

MIT
