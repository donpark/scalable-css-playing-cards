import os
import time
from fabric.api import *
from fabric.contrib.console import confirm
from fabric.contrib.project import rsync_project

def old():
  local("npm outdated")

def remove_compiled(in_type, out_type, dirs = "."):
  with settings(warn_only=True):
    with lcd("."):
      files = local(("find %s -name \*%s" % (dirs, in_type)), capture=True)
      lines = files.split('\n')
      for line in lines:
        if line.find("node_modules") == -1:
          path, ext = os.path.splitext(line)
          path += out_type
          if os.path.exists(path):
            local("rm %s" % path)

def clean():
  with settings(warn_only=True):
    remove_compiled(".coffee", ".js")
    remove_compiled(".styl", ".css")
    remove_compiled(".jade", ".html")

def build():
  with settings(warn_only=True):
    local("coffee -c *.coffee")
    local("coffee -c lib")
    local("coffee -c public")
    local("coffee -c routes")
    local("stylus public/css")
    local("jade public")

def dev():
  build()
  local("node app.js")

def site():
  build()
  local("cp public/js/*.js gh-pages/demos/js")
  local("cp public/css/*.css gh-pages/demos/css")
  local("cp -Rf public/fonts gh-pages/demos")
  local("jade -P -O gh-pages/demos views/demo.jade")
  local("jade -P -O gh-pages/demos views/mixins/playingcards.jade")

def dist():
  build()
  local("jade -P -O dist views/mixins/playingcards.jade")
  local("cp public/css/playingcards.css dist")
  local("cp public/js/playingcards.js dist")
  local("cp -Rf public/fonts dist")
  # local("uglifyjs dist/playingcards.js > dist/playingcards.min.js")
  