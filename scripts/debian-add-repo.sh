#!/bin/bash

# This script runs when user install the debian package

# Link to the binary
ln -sf '/opt/${productFilename}/${executable}' '/usr/bin/${executable}'

# SUID chrome-sandbox for Electron 5+
chmod 4755 '/opt/${productFilename}/chrome-sandbox' || true

update-mime-database /usr/share/mime || true
update-desktop-database /usr/share/applications || true

# Install apt repository source list if it does not exist
if ! grep ^ /etc/apt/sources.list /etc/apt/sources.list.d/* | grep zulip.list; then
    sudo apt-key adv --keyserver pool.sks-keyservers.net --recv 69AD12704E71A4803DCA3A682424BE5AE9BD10D9
    echo "deb https://dl.bintray.com/zulip/debian/ stable main" | \
    sudo tee -a /etc/apt/sources.list.d/zulip.list;
fi
