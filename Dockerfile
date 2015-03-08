FROM dockerfile/nodejs

MAINTAINER Korneliusz Caputa, helluinster@gmail.com
RUN apt-get update -y

# install ruby
RUN apt-get install -y ruby-full rubygems-integration

# install compass
RUN gem install --no-rdoc --no-ri sass
RUN gem install --no-rdoc --no-ri compass


WORKDIR /home/interactive-cv
RUN npm install -g grunt-cli
RUN npm install -g bower

ADD package.json /home/interactive-cv/package.json
RUN npm install

ADD .bowerrc /home/interactive-cv/.bowerrc
ADD bower.json /home/interactive-cv/bower.json
RUN bower install --config.interactive=false --allow-root

ADD . /home/interactive-cv

ENV NODE_ENV development

EXPOSE 9000

CMD ["grunt serve"]
