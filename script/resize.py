import cv2


def resize_image(img1, img2):
    # height, width, number of channels in image
    height = img1.shape[0]
    width = img1.shape[1]
    dim1 = (width, height)

    # height, width, number of channels in image
    height = img2.shape[0]
    width = img2.shape[1]
    dim2 = (width, height)

    if dim1 > dim2:
        # resize image
        img1 = cv2.resize(img1, dim2, interpolation=cv2.INTER_AREA)
        return img1, img2
    else:
        # resize image
        img2 = cv2.resize(img2, dim1, interpolation=cv2.INTER_AREA)
        return img1, img2
