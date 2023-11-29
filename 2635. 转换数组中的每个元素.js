/* ��дһ�������������������һ���������� arr ��һ��ӳ�亯��  fn ��ͨ����ӳ�亯������һ���µ����顣

��������Ĵ������ӦΪ returnedArray[i] = fn(arr[i], i) ��

�����ڲ�ʹ�����÷��� Array.map ��ǰ���½��������⡣

 

ʾ�� 1:

���룺arr = [1,2,3], fn = function plusone(n) { return n + 1; }
�����[2,3,4]
���ͣ� 
const newArray = map(arr, plusone); // [2,3,4]
��ӳ�亯������ֵ�ǽ�������ÿ��Ԫ�ص�ֵ�� 1��
ʾ�� 2:

���룺arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
�����[1,3,5]
���ͣ���ӳ�亯������ֵ��������������������ÿ��ֵ��
ʾ�� 3:

���룺arr = [10,20,30], fn = function constant() { return 42; }
�����[42,42,42]
���ͣ���ӳ�亯������ֵ��Ϊ 42��
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {}
