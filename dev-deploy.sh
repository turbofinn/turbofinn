#!/bin/bash

rm -rf build/ && \
yarn build && cd build && \
aws --profile 155133898343 s3 sync  . s3://turbofinn && \
# aws --profile Finnable-Dev cloudfront create-invalidation --distribution-id E3AO7BO2YHDP9Q --paths "/*"

echo " ------------------------------------------------------"
echo "|                                                      |"
echo "|                     Done                             |"
echo "|                                                      |"
echo " ------------------------------------------------------"