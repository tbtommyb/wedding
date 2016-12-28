#!/bin/bash
hugo
rsync -ravzP --delete /Users/thomasbarrett/coding/wedding/public/ -e 'ssh -i /Users/thomasbarrett/coding/aws/ireland-key-pair.pem' ubuntu@52.17.9.164:/home/ubuntu/wedding
