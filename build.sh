#!/usr/bin/env sh

cd doc_gen && yarn build && cd ..
cp -R doc_gen/build/* docs