# Benchmark

Compare repo between expressjs and nanoexpress (Pro) without any modification (out-of-the-box)

## Usage

1. Install Debian or any Linux OS
2. Install **wrk**
3. Install `docker`, `docker-compose` and etc, configure it
4. Start test containers via `docker-compose up -d` and Test via `wrk`

## Results

Almost 8-x faster than expressjs, great results

### Round 1-3

Known as warmup

```bash
root@testvps:~# wrk http://test-api.dalisoft.uz:4100
Running 10s test @ http://test-api.dalisoft.uz:4100
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   309.96us  125.64us   7.36ms   95.52%
    Req/Sec    16.25k   454.79    16.70k    91.58%
  326505 requests in 10.10s, 96.22MB read
Requests/sec:  32326.53
Transfer/sec:      9.53MB
root@testvps:~# wrk http://test-api.dalisoft.uz:4200
Running 10s test @ http://test-api.dalisoft.uz:4200
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.26ms    1.60ms  22.22ms   92.66%
    Req/Sec     2.41k   534.43     3.30k    74.00%
  48019 requests in 10.01s, 65.12MB read
  Non-2xx or 3xx responses: 48019
Requests/sec:   4799.47
Transfer/sec:      6.51MB
```

### Round 4-6

```bash
root@testvps:~# wrk http://test-api.dalisoft.uz:4100/time
Running 10s test @ http://test-api.dalisoft.uz:4100/time
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   414.08us  716.55us  22.09ms   98.68%
    Req/Sec    13.98k     1.82k   16.87k    77.23%
  280967 requests in 10.10s, 85.74MB read
Requests/sec:  27817.43
Transfer/sec:      8.49MB
root@testvps:~# wrk http://test-api.dalisoft.uz:4200/time
Running 10s test @ http://test-api.dalisoft.uz:4200/time
  2 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.05ms    1.00ms  19.32ms   91.46%
    Req/Sec     2.54k   356.90     3.22k    74.00%
  50565 requests in 10.01s, 68.57MB read
  Non-2xx or 3xx responses: 50565
Requests/sec:   5049.91
Transfer/sec:      6.85MB
root@testvps:~#
```

## Machine

Command got via `neofetch`

```bash
❯ neofetch
       _,met$$$$$gg.          root@testvps
    ,g$$$$$$$$$$$$$$$P.       -------
  ,g$$P"     """Y$$.".        OS: Debian GNU/Linux 10 (buster) x86_64
 ,$$P'              `$$$.     Host: KVM RHEL 7.6.0 PC (i440FX + PIIX, 1996)
',$$P       ,ggs.     `$$b:   Kernel: 4.19.0-9-amd64
`d$$'     ,$P"'   .    $$$    Uptime: -
 $$P      d$'     ,    $$P    Packages: 556 (dpkg)
 $$:      $$.   -    ,d$$'    Shell: fish 3.0.2
 $$;      Y$b._   _,d$P'      Terminal: /dev/pts/0
 Y$$.    `.`"Y$$$$P"'         CPU: Intel Xeon Gold 5115 (6) @ 2.394GHz
 `$$b      "-.__              GPU: Cirrus Logic GD 5446
  `Y$$                        Memory: 1288MiB / 5962MiB
   `Y$$.
     `$$b.
       `Y$$b.
          `"Y$b._
              `"""

```

## License

MIT
