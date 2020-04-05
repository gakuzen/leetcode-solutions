/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const maxWidth = height.length;
    
    let maxWidthArea = (maxWidth - 1) * Math.min(height[0], height[maxWidth - 1]);
    
    let i = 0;
    let j = maxWidth -1;
    while (i < maxWidth && j >= 0 && i !== j) {
        const moveLeft = height[i] < height[j] ? true : false;
        if (moveLeft) i++;
        else j--;
        
        const area = (j-i) * Math.min(height[i],height[j]);
        maxWidthArea = Math.max(maxWidthArea, area);
    }
    
    return maxWidthArea;
};