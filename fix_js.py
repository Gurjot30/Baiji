import os

with open("about.html", "r") as f:
    content = f.read()

# The subagent wrote \` and \$ into the HTML which breaks JS
content = content.replace("\\`", "`")
content = content.replace("\\$", "$")

with open("about.html", "w") as f:
    f.write(content)
