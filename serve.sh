#!/bin/bash

docker run \
  -v /home/elkorn/Code/interactive-cv:/home/interactive-cv \
  -p 127.0.0.1:9000:9000 \
  -p 127.0.0.1:35729:35729 \
  -it --rm interactivecv_web "grunt serve"
