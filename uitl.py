# load image file
from PIL import Image

# 加载PNG图片
img = Image.open("static/images/logo.png")

# 降低分辨率，例如缩小为原来的1/2
low_res_img = img.resize((img.width // 2, img.height // 2), Image.BILINEAR)

# 可保存为新的PNG文件
low_res_img.save("static/images/logo_low.png")
