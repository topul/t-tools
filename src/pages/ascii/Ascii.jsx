import React from 'react'

const Ascii = () => {
  return (
    <div className='h-full w-full overflow-y-auto bg-white p-6'>
      {/* <div>
        <h1 className='font-bold text-4xl'>ASCii码表</h1>
      </div> */}
      <h4 className='font-bold text-xl mb-4'>ASCii打印字符对照表</h4>
      <table className='table text-center'>
        <tbody>
          <tr>
            <th className='w-10'>DEC</th>
            <th className='w-10'>OCT</th>
            <th className='w-10'>HEX</th>
            <th className='w-30'>BIN</th>
            <th className='w-20'>缩写/符号</th>
            <th className='w-20'>HTML实体</th>
            <th className='w-30'>描述</th>
          </tr>
          <tr>
            <td>0</td>
            <td>000</td>
            <td>00</td>
            <td>00000000</td>
            <td>NUL</td>
            <td>&amp;#000;</td>
            <td>Null char (空字符)</td>
          </tr>
          <tr>
            <td>1</td>
            <td>001</td>
            <td>01</td>
            <td>00000001</td>
            <td>SOH</td>
            <td>&amp;#001;</td>
            <td>Start of Heading (标题开始)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>002</td>
            <td>02</td>
            <td>00000010</td>
            <td>STX</td>
            <td>&amp;#002;</td>
            <td>Start of Text (正文开始)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>003</td>
            <td>03</td>
            <td>00000011</td>
            <td>ETX</td>
            <td>&amp;#003;</td>
            <td>End of Text (正文结束)</td>
          </tr>
          <tr>
            <td>4</td>
            <td>004</td>
            <td>04</td>
            <td>00000100</td>
            <td>EOT</td>
            <td>&amp;#004;</td>
            <td>End of Transmission (传输结束)</td>
          </tr>
          <tr>
            <td>5</td>
            <td>005</td>
            <td>05</td>
            <td>00000101</td>
            <td>ENQ</td>
            <td>&amp;#005;</td>
            <td>Enquiry (请求)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>006</td>
            <td>06</td>
            <td>00000110</td>
            <td>ACK</td>
            <td>&amp;#006;</td>
            <td>Acknowledgment (收到通知)</td>
          </tr>
          <tr>
            <td>7</td>
            <td>007</td>
            <td>07</td>
            <td>00000111</td>
            <td>BEL</td>
            <td>&amp;#007;</td>
            <td>Bell (响铃)</td>
          </tr>
          <tr>
            <td>8</td>
            <td>010</td>
            <td>08</td>
            <td>00001000</td>
            <td> BS</td>
            <td>&amp;#008;</td>
            <td>Back Space (退格)</td>
          </tr>
          <tr>
            <td>9</td>
            <td>011</td>
            <td>09</td>
            <td>00001001</td>
            <td> HT</td>
            <td>&amp;#009;</td>
            <td>Horizontal Tab (水平制表符)</td>
          </tr>
          <tr>
            <td>10</td>
            <td>012</td>
            <td>0A</td>
            <td>00001010</td>
            <td> LF</td>
            <td>&amp;#010;</td>
            <td>Line Feed (换行键)</td>
          </tr>
          <tr>
            <td>11</td>
            <td>013</td>
            <td>0B</td>
            <td>00001011</td>
            <td> VT</td>
            <td>&amp;#011;</td>
            <td>Vertical Tab (垂直制表符)</td>
          </tr>
          <tr>
            <td>12</td>
            <td>014</td>
            <td>0C</td>
            <td>00001100</td>
            <td> FF</td>
            <td>&amp;#012;</td>
            <td>Form Feed (换页键)</td>
          </tr>
          <tr>
            <td>13</td>
            <td>015</td>
            <td>0D</td>
            <td>00001101</td>
            <td> CR</td>
            <td>&amp;#013;</td>
            <td>Carriage Return (回车键)</td>
          </tr>
          <tr>
            <td>14</td>
            <td>016</td>
            <td>0E</td>
            <td>00001110</td>
            <td> SO</td>
            <td>&amp;#014;</td>
            <td>Shift Out / X-On (不用切换)</td>
          </tr>
          <tr>
            <td>15</td>
            <td>017</td>
            <td>0F</td>
            <td>00001111</td>
            <td> SI</td>
            <td>&amp;#015;</td>
            <td>Shift In / X-Off (启用切换)</td>
          </tr>
          <tr>
            <td>16</td>
            <td>020</td>
            <td>10</td>
            <td>00010000</td>
            <td>DLE</td>
            <td>&amp;#016;</td>
            <td>Data Line Escape (数据链路转义)</td>
          </tr>
          <tr>
            <td>17</td>
            <td>021</td>
            <td>11</td>
            <td>00010001</td>
            <td>DC1</td>
            <td>&amp;#017;</td>
            <td>Device Control 1 (设备控制1)</td>
          </tr>
          <tr>
            <td>18</td>
            <td>022</td>
            <td>12</td>
            <td>00010010</td>
            <td>DC2</td>
            <td>&amp;#018;</td>
            <td>Device Control 2 (设备控制2)</td>
          </tr>
          <tr>
            <td>19</td>
            <td>023</td>
            <td>13</td>
            <td>00010011</td>
            <td>DC3</td>
            <td>&amp;#019;</td>
            <td>Device Control 3 (设备控制3)</td>
          </tr>
          <tr>
            <td>20</td>
            <td>024</td>
            <td>14</td>
            <td>00010100</td>
            <td>DC4</td>
            <td>&amp;#020;</td>
            <td>Device Control 4 (设备控制4)</td>
          </tr>
          <tr>
            <td>21</td>
            <td>025</td>
            <td>15</td>
            <td>00010101</td>
            <td>NAK</td>
            <td>&amp;#021;</td>
            <td>Negative Acknowledgement (拒绝接收)</td>
          </tr>
          <tr>
            <td>22</td>
            <td>026</td>
            <td>16</td>
            <td>00010110</td>
            <td>SYN</td>
            <td>&amp;#022;</td>
            <td>Synchronous Idle (同步空闲)</td>
          </tr>
          <tr>
            <td>23</td>
            <td>027</td>
            <td>17</td>
            <td>00010111</td>
            <td>ETB</td>
            <td>&amp;#023;</td>
            <td>End of Transmit Block (传输块结束)</td>
          </tr>
          <tr>
            <td>24</td>
            <td>030</td>
            <td>18</td>
            <td>00011000</td>
            <td>CAN</td>
            <td>&amp;#024;</td>
            <td>Cancel (取消)</td>
          </tr>
          <tr>
            <td>25</td>
            <td>031</td>
            <td>19</td>
            <td>00011001</td>
            <td> EM</td>
            <td>&amp;#025;</td>
            <td>End of Medium (介质中断)</td>
          </tr>
          <tr>
            <td>26</td>
            <td>032</td>
            <td>1A</td>
            <td>00011010</td>
            <td>SUB</td>
            <td>&amp;#026;</td>
            <td>Substitute (替补)</td>
          </tr>
          <tr>
            <td>27</td>
            <td>033</td>
            <td>1B</td>
            <td>00011011</td>
            <td>ESC</td>
            <td>&amp;#027;</td>
            <td>Escape (溢出)</td>
          </tr>
          <tr>
            <td>28</td>
            <td>034</td>
            <td>1C</td>
            <td>00011100</td>
            <td> FS</td>
            <td>&amp;#028;</td>
            <td>File Separator (文件分割符)</td>
          </tr>
          <tr>
            <td>29</td>
            <td>035</td>
            <td>1D</td>
            <td>00011101</td>
            <td> GS</td>
            <td>&amp;#029;</td>
            <td>Group Separator (分组符)</td>
          </tr>
          <tr>
            <td>30</td>
            <td>036</td>
            <td>1E</td>
            <td>00011110</td>
            <td> RS</td>
            <td>&amp;#030;</td>
            <td>Record Separator (记录分离符)</td>
          </tr>
          <tr>
            <td>31</td>
            <td>037</td>
            <td>1F</td>
            <td>00011111</td>
            <td> US</td>
            <td>&amp;#031;</td>
            <td>Unit Separator (单元分隔符)</td>
          </tr>
          <tr>
            <td>32</td>
            <td>040</td>
            <td>20</td>
            <td>00100000</td>
            <td>&nbsp;</td>
            <td>&amp;#32;</td>
            <td>Space (空格)</td>
          </tr>
          <tr>
            <td>33</td>
            <td>041</td>
            <td>21</td>
            <td>00100001</td>
            <td>!</td>
            <td>&amp;#33;</td>
            <td>Exclamation mark</td>
          </tr>
          <tr>
            <td>34</td>
            <td>042</td>
            <td>22</td>
            <td>00100010</td>
            <td>"</td>
            <td>&amp;#34;</td>
            <td>Double quotes</td>
          </tr>
          <tr>
            <td>35</td>
            <td>043</td>
            <td>23</td>
            <td>00100011</td>
            <td>#</td>
            <td>&amp;#35;</td>
            <td>Number</td>
          </tr>
          <tr>
            <td>36</td>
            <td>044</td>
            <td>24</td>
            <td>00100100</td>
            <td>$</td>
            <td>&amp;#36;</td>
            <td>Dollar</td>
          </tr>
          <tr>
            <td>37</td>
            <td>045</td>
            <td>25</td>
            <td>00100101</td>
            <td>%</td>
            <td>&amp;#37;</td>
            <td>Procenttecken</td>
          </tr>
          <tr>
            <td>38</td>
            <td>046</td>
            <td>26</td>
            <td>00100110</td>
            <td>&amp;</td>
            <td>&amp;#38;</td>
            <td>Ampersand</td>
          </tr>
          <tr>
            <td>39</td>
            <td>047</td>
            <td>27</td>
            <td>00100111</td>
            <td>'</td>
            <td>&amp;#39;</td>
            <td>Single quote</td>
          </tr>
          <tr>
            <td>40</td>
            <td>050</td>
            <td>28</td>
            <td>00101000</td>
            <td>(</td>
            <td>&amp;#40;</td>
            <td>Open parenthesis</td>
          </tr>
          <tr>
            <td>41</td>
            <td>051</td>
            <td>29</td>
            <td>00101001</td>
            <td>)</td>
            <td>&amp;#41;</td>
            <td>Close parenthesis</td>
          </tr>
          <tr>
            <td>42</td>
            <td>052</td>
            <td>2A</td>
            <td>00101010</td>
            <td>*</td>
            <td>&amp;#42;</td>
            <td>Asterisk</td>
          </tr>
          <tr>
            <td>43</td>
            <td>053</td>
            <td>2B</td>
            <td>00101011</td>
            <td>+</td>
            <td>&amp;#43;</td>
            <td>Plus</td>
          </tr>
          <tr>
            <td>44</td>
            <td>054</td>
            <td>2C</td>
            <td>00101100</td>
            <td>,</td>
            <td>&amp;#44;</td>
            <td>Comma</td>
          </tr>
          <tr>
            <td>45</td>
            <td>055</td>
            <td>2D</td>
            <td>00101101</td>
            <td>-</td>
            <td>&amp;#45;</td>
            <td>Hyphen</td>
          </tr>
          <tr>
            <td>46</td>
            <td>056</td>
            <td>2E</td>
            <td>00101110</td>
            <td>.</td>
            <td>&amp;#46;</td>
            <td>Period, dot or full stop</td>
          </tr>
          <tr>
            <td>47</td>
            <td>057</td>
            <td>2F</td>
            <td>00101111</td>
            <td>/</td>
            <td>&amp;#47;</td>
            <td>Slash or divide</td>
          </tr>
          <tr>
            <td>48</td>
            <td>060</td>
            <td>30</td>
            <td>00110000</td>
            <td>0</td>
            <td>&amp;#48;</td>
            <td>Zero</td>
          </tr>
          <tr>
            <td>49</td>
            <td>061</td>
            <td>31</td>
            <td>00110001</td>
            <td>1</td>
            <td>&amp;#49;</td>
            <td>One</td>
          </tr>
          <tr>
            <td>50</td>
            <td>062</td>
            <td>32</td>
            <td>00110010</td>
            <td>2</td>
            <td>&amp;#50;</td>
            <td>Two</td>
          </tr>
          <tr>
            <td>51</td>
            <td>063</td>
            <td>33</td>
            <td>00110011</td>
            <td>3</td>
            <td>&amp;#51;</td>
            <td>Three</td>
          </tr>
          <tr>
            <td>52</td>
            <td>064</td>
            <td>34</td>
            <td>00110100</td>
            <td>4</td>
            <td>&amp;#52;</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>53</td>
            <td>065</td>
            <td>35</td>
            <td>00110101</td>
            <td>5</td>
            <td>&amp;#53;</td>
            <td>Five</td>
          </tr>
          <tr>
            <td>54</td>
            <td>066</td>
            <td>36</td>
            <td>00110110</td>
            <td>6</td>
            <td>&amp;#54;</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>55</td>
            <td>067</td>
            <td>37</td>
            <td>00110111</td>
            <td>7</td>
            <td>&amp;#55;</td>
            <td>Seven</td>
          </tr>
          <tr>
            <td>56</td>
            <td>070</td>
            <td>38</td>
            <td>00111000</td>
            <td>8</td>
            <td>&amp;#56;</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>57</td>
            <td>071</td>
            <td>39</td>
            <td>00111001</td>
            <td>9</td>
            <td>&amp;#57;</td>
            <td>Nine</td>
          </tr>
          <tr>
            <td>58</td>
            <td>072</td>
            <td>3A</td>
            <td>00111010</td>
            <td>:</td>
            <td>&amp;#58;</td>
            <td>Colon</td>
          </tr>
          <tr>
            <td>59</td>
            <td>073</td>
            <td>3B</td>
            <td>00111011</td>
            <td>;</td>
            <td>&amp;#59;</td>
            <td>Semicolon</td>
          </tr>
          <tr>
            <td>60</td>
            <td>074</td>
            <td>3C</td>
            <td>00111100</td>
            <td>&lt;</td>
            <td>&amp;#60;</td>
            <td>Less than</td>
          </tr>
          <tr>
            <td>61</td>
            <td>075</td>
            <td>3D</td>
            <td>00111101</td>
            <td>=</td>
            <td>&amp;#61;</td>
            <td>Equals</td>
          </tr>
          <tr>
            <td>62</td>
            <td>076</td>
            <td>3E</td>
            <td>00111110</td>
            <td>&gt;</td>
            <td>&amp;#62;</td>
            <td>Greater than</td>
          </tr>
          <tr>
            <td>63</td>
            <td>077</td>
            <td>3F</td>
            <td>00111111</td>
            <td>?</td>
            <td>&amp;#63;</td>
            <td>Question mark</td>
          </tr>
          <tr>
            <td>64</td>
            <td>100</td>
            <td>40</td>
            <td>01000000</td>
            <td>@</td>
            <td>&amp;#64;</td>
            <td>At symbol</td>
          </tr>
          <tr>
            <td>65</td>
            <td>101</td>
            <td>41</td>
            <td>01000001</td>
            <td>A</td>
            <td>&amp;#65;</td>
            <td>Uppercase A</td>
          </tr>
          <tr>
            <td>66</td>
            <td>102</td>
            <td>42</td>
            <td>01000010</td>
            <td>B</td>
            <td>&amp;#66;</td>
            <td>Uppercase B</td>
          </tr>
          <tr>
            <td>67</td>
            <td>103</td>
            <td>43</td>
            <td>01000011</td>
            <td>C</td>
            <td>&amp;#67;</td>
            <td>Uppercase C</td>
          </tr>
          <tr>
            <td>68</td>
            <td>104</td>
            <td>44</td>
            <td>01000100</td>
            <td>D</td>
            <td>&amp;#68;</td>
            <td>Uppercase D</td>
          </tr>
          <tr>
            <td>69</td>
            <td>105</td>
            <td>45</td>
            <td>01000101</td>
            <td>E</td>
            <td>&amp;#69;</td>
            <td>Uppercase E</td>
          </tr>
          <tr>
            <td>70</td>
            <td>106</td>
            <td>46</td>
            <td>01000110</td>
            <td>F</td>
            <td>&amp;#70;</td>
            <td>Uppercase F</td>
          </tr>
          <tr>
            <td>71</td>
            <td>107</td>
            <td>47</td>
            <td>01000111</td>
            <td>G</td>
            <td>&amp;#71;</td>
            <td>Uppercase G</td>
          </tr>
          <tr>
            <td>72</td>
            <td>110</td>
            <td>48</td>
            <td>01001000</td>
            <td>H</td>
            <td>&amp;#72;</td>
            <td>Uppercase H</td>
          </tr>
          <tr>
            <td>73</td>
            <td>111</td>
            <td>49</td>
            <td>01001001</td>
            <td>I</td>
            <td>&amp;#73;</td>
            <td>Uppercase I</td>
          </tr>
          <tr>
            <td>74</td>
            <td>112</td>
            <td>4A</td>
            <td>01001010</td>
            <td>J</td>
            <td>&amp;#74;</td>
            <td>Uppercase J</td>
          </tr>
          <tr>
            <td>75</td>
            <td>113</td>
            <td>4B</td>
            <td>01001011</td>
            <td>K</td>
            <td>&amp;#75;</td>
            <td>Uppercase K</td>
          </tr>
          <tr>
            <td>76</td>
            <td>114</td>
            <td>4C</td>
            <td>01001100</td>
            <td>L</td>
            <td>&amp;#76;</td>
            <td>Uppercase L</td>
          </tr>
          <tr>
            <td>77</td>
            <td>115</td>
            <td>4D</td>
            <td>01001101</td>
            <td>M</td>
            <td>&amp;#77;</td>
            <td>Uppercase M</td>
          </tr>
          <tr>
            <td>78</td>
            <td>116</td>
            <td>4E</td>
            <td>01001110</td>
            <td>N</td>
            <td>&amp;#78;</td>
            <td>Uppercase N</td>
          </tr>
          <tr>
            <td>79</td>
            <td>117</td>
            <td>4F</td>
            <td>01001111</td>
            <td>O</td>
            <td>&amp;#79;</td>
            <td>Uppercase O</td>
          </tr>
          <tr>
            <td>80</td>
            <td>120</td>
            <td>50</td>
            <td>01010000</td>
            <td>P</td>
            <td>&amp;#80;</td>
            <td>Uppercase P</td>
          </tr>
          <tr>
            <td>81</td>
            <td>121</td>
            <td>51</td>
            <td>01010001</td>
            <td>Q</td>
            <td>&amp;#81;</td>
            <td>Uppercase Q</td>
          </tr>
          <tr>
            <td>82</td>
            <td>122</td>
            <td>52</td>
            <td>01010010</td>
            <td>R</td>
            <td>&amp;#82;</td>
            <td>Uppercase R</td>
          </tr>
          <tr>
            <td>83</td>
            <td>123</td>
            <td>53</td>
            <td>01010011</td>
            <td>S</td>
            <td>&amp;#83;</td>
            <td>Uppercase S</td>
          </tr>
          <tr>
            <td>84</td>
            <td>124</td>
            <td>54</td>
            <td>01010100</td>
            <td>T</td>
            <td>&amp;#84;</td>
            <td>Uppercase T</td>
          </tr>
          <tr>
            <td>85</td>
            <td>125</td>
            <td>55</td>
            <td>01010101</td>
            <td>U</td>
            <td>&amp;#85;</td>
            <td>Uppercase U</td>
          </tr>
          <tr>
            <td>86</td>
            <td>126</td>
            <td>56</td>
            <td>01010110</td>
            <td>V</td>
            <td>&amp;#86;</td>
            <td>Uppercase V</td>
          </tr>
          <tr>
            <td>87</td>
            <td>127</td>
            <td>57</td>
            <td>01010111</td>
            <td>W</td>
            <td>&amp;#87;</td>
            <td>Uppercase W</td>
          </tr>
          <tr>
            <td>88</td>
            <td>130</td>
            <td>58</td>
            <td>01011000</td>
            <td>X</td>
            <td>&amp;#88;</td>
            <td>Uppercase X</td>
          </tr>
          <tr>
            <td>89</td>
            <td>131</td>
            <td>59</td>
            <td>01011001</td>
            <td>Y</td>
            <td>&amp;#89;</td>
            <td>Uppercase Y</td>
          </tr>
          <tr>
            <td>90</td>
            <td>132</td>
            <td>5A</td>
            <td>01011010</td>
            <td>Z</td>
            <td>&amp;#90;</td>
            <td>Uppercase Z</td>
          </tr>
          <tr>
            <td>91</td>
            <td>133</td>
            <td>5B</td>
            <td>01011011</td>
            <td>[</td>
            <td>&amp;#91;</td>
            <td>Opening bracket</td>
          </tr>
          <tr>
            <td>92</td>
            <td>134</td>
            <td>5C</td>
            <td>01011100</td>
            <td>\</td>
            <td>&amp;#92;</td>
            <td>Backslash</td>
          </tr>
          <tr>
            <td>93</td>
            <td>135</td>
            <td>5D</td>
            <td>01011101</td>
            <td>]</td>
            <td>&amp;#93;</td>
            <td>Closing bracket</td>
          </tr>
          <tr>
            <td>94</td>
            <td>136</td>
            <td>5E</td>
            <td>01011110</td>
            <td>^</td>
            <td>&amp;#94;</td>
            <td>Caret - circumflex</td>
          </tr>
          <tr>
            <td>95</td>
            <td>137</td>
            <td>5F</td>
            <td>01011111</td>
            <td>_</td>
            <td>&amp;#95;</td>
            <td>Underscore</td>
          </tr>
          <tr>
            <td>96</td>
            <td>140</td>
            <td>60</td>
            <td>01100000</td>
            <td>`</td>
            <td>&amp;#96;</td>
            <td>Grave accent</td>
          </tr>
          <tr>
            <td>97</td>
            <td>141</td>
            <td>61</td>
            <td>01100001</td>
            <td>a</td>
            <td>&amp;#97;</td>
            <td>Lowercase a</td>
          </tr>
          <tr>
            <td>98</td>
            <td>142</td>
            <td>62</td>
            <td>01100010</td>
            <td>b</td>
            <td>&amp;#98;</td>
            <td>Lowercase b</td>
          </tr>
          <tr>
            <td>99</td>
            <td>143</td>
            <td>63</td>
            <td>01100011</td>
            <td>c</td>
            <td>&amp;#99;</td>
            <td>Lowercase c</td>
          </tr>
          <tr>
            <td>100</td>
            <td>144</td>
            <td>64</td>
            <td>01100100</td>
            <td>d</td>
            <td>&amp;#100;</td>
            <td>Lowercase d</td>
          </tr>
          <tr>
            <td>101</td>
            <td>145</td>
            <td>65</td>
            <td>01100101</td>
            <td>e</td>
            <td>&amp;#101;</td>
            <td>Lowercase e</td>
          </tr>
          <tr>
            <td>102</td>
            <td>146</td>
            <td>66</td>
            <td>01100110</td>
            <td>f</td>
            <td>&amp;#102;</td>
            <td>Lowercase f</td>
          </tr>
          <tr>
            <td>103</td>
            <td>147</td>
            <td>67</td>
            <td>01100111</td>
            <td>g</td>
            <td>&amp;#103;</td>
            <td>Lowercase g</td>
          </tr>
          <tr>
            <td>104</td>
            <td>150</td>
            <td>68</td>
            <td>01101000</td>
            <td>h</td>
            <td>&amp;#104;</td>
            <td>Lowercase h</td>
          </tr>
          <tr>
            <td>105</td>
            <td>151</td>
            <td>69</td>
            <td>01101001</td>
            <td>i</td>
            <td>&amp;#105;</td>
            <td>Lowercase i</td>
          </tr>
          <tr>
            <td>106</td>
            <td>152</td>
            <td>6A</td>
            <td>01101010</td>
            <td>j</td>
            <td>&amp;#106;</td>
            <td>Lowercase j</td>
          </tr>
          <tr>
            <td>107</td>
            <td>153</td>
            <td>6B</td>
            <td>01101011</td>
            <td>k</td>
            <td>&amp;#107;</td>
            <td>Lowercase k</td>
          </tr>
          <tr>
            <td>108</td>
            <td>154</td>
            <td>6C</td>
            <td>01101100</td>
            <td>l</td>
            <td>&amp;#108;</td>
            <td>Lowercase l</td>
          </tr>
          <tr>
            <td>109</td>
            <td>155</td>
            <td>6D</td>
            <td>01101101</td>
            <td>m</td>
            <td>&amp;#109;</td>
            <td>Lowercase m</td>
          </tr>
          <tr>
            <td>110</td>
            <td>156</td>
            <td>6E</td>
            <td>01101110</td>
            <td>n</td>
            <td>&amp;#110;</td>
            <td>Lowercase n</td>
          </tr>
          <tr>
            <td>111</td>
            <td>157</td>
            <td>6F</td>
            <td>01101111</td>
            <td>o</td>
            <td>&amp;#111;</td>
            <td>Lowercase o</td>
          </tr>
          <tr>
            <td>112</td>
            <td>160</td>
            <td>70</td>
            <td>01110000</td>
            <td>p</td>
            <td>&amp;#112;</td>
            <td>Lowercase p</td>
          </tr>
          <tr>
            <td>113</td>
            <td>161</td>
            <td>71</td>
            <td>01110001</td>
            <td>q</td>
            <td>&amp;#113;</td>
            <td>Lowercase q</td>
          </tr>
          <tr>
            <td>114</td>
            <td>162</td>
            <td>72</td>
            <td>01110010</td>
            <td>r</td>
            <td>&amp;#114;</td>
            <td>Lowercase r</td>
          </tr>
          <tr>
            <td>115</td>
            <td>163</td>
            <td>73</td>
            <td>01110011</td>
            <td>s</td>
            <td>&amp;#115;</td>
            <td>Lowercase s</td>
          </tr>
          <tr>
            <td>116</td>
            <td>164</td>
            <td>74</td>
            <td>01110100</td>
            <td>t</td>
            <td>&amp;#116;</td>
            <td>Lowercase t</td>
          </tr>
          <tr>
            <td>117</td>
            <td>165</td>
            <td>75</td>
            <td>01110101</td>
            <td>u</td>
            <td>&amp;#117;</td>
            <td>Lowercase u</td>
          </tr>
          <tr>
            <td>118</td>
            <td>166</td>
            <td>76</td>
            <td>01110110</td>
            <td>v</td>
            <td>&amp;#118;</td>
            <td>Lowercase v</td>
          </tr>
          <tr>
            <td>119</td>
            <td>167</td>
            <td>77</td>
            <td>01110111</td>
            <td>w</td>
            <td>&amp;#119;</td>
            <td>Lowercase w</td>
          </tr>
          <tr>
            <td>120</td>
            <td>170</td>
            <td>78</td>
            <td>01111000</td>
            <td>x</td>
            <td>&amp;#120;</td>
            <td>Lowercase x</td>
          </tr>
          <tr>
            <td>121</td>
            <td>171</td>
            <td>79</td>
            <td>01111001</td>
            <td>y</td>
            <td>&amp;#121;</td>
            <td>Lowercase y</td>
          </tr>
          <tr>
            <td>122</td>
            <td>172</td>
            <td>7A</td>
            <td>01111010</td>
            <td>z</td>
            <td>&amp;#122;</td>
            <td>Lowercase z</td>
          </tr>
          <tr>
            <td>123</td>
            <td>173</td>
            <td>7B</td>
            <td>01111011</td>
            <td>{'{'}</td>
            <td>&amp;#123;</td>
            <td>Opening brace</td>
          </tr>
          <tr>
            <td>124</td>
            <td>174</td>
            <td>7C</td>
            <td>01111100</td>
            <td>|</td>
            <td>&amp;#124;</td>
            <td>Vertical bar</td>
          </tr>
          <tr>
            <td>125</td>
            <td>175</td>
            <td>7D</td>
            <td>01111101</td>
            <td>{'}'}</td>
            <td>&amp;#125;</td>
            <td>Closing brace</td>
          </tr>
          <tr>
            <td>126</td>
            <td>176</td>
            <td>7E</td>
            <td>01111110</td>
            <td>~</td>
            <td>&amp;#126;</td>
            <td>Equivalency sign (tilde)</td>
          </tr>
          <tr>
            <td>127</td>
            <td>177</td>
            <td>7F</td>
            <td>01111111</td>
            <td></td>
            <td>&amp;#127;</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
      <h4 className='font-bold text-xl my-4'>扩展ASCii打印字符对照表</h4>
      <table className='table text-center'>
        <tbody>
          <tr>
            <th className='w-10'>DEC</th>
            <th className='w-10'>OCT</th>
            <th className='w-10'>HEX</th>
            <th className='w-30'>BIN</th>
            <th className='w-20'>缩写/符号</th>
            <th className='w-20'>HTML实体</th>
            <th className='w-30'>描述</th>
          </tr>
          <tr>
            <td>128</td>
            <td>200</td>
            <td>80</td>
            <td>10000000</td>
            <td>€</td>
            <td>&amp;#128;</td>
            <td>Euro sign</td>
          </tr>
          <tr>
            <td>129</td>
            <td>201</td>
            <td>81</td>
            <td>10000001</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>130</td>
            <td>202</td>
            <td>82</td>
            <td>10000010</td>
            <td>‚</td>
            <td>&amp;#130;</td>
            <td>Single low-9 quotation mark</td>
          </tr>
          <tr>
            <td>131</td>
            <td>203</td>
            <td>83</td>
            <td>10000011</td>
            <td>ƒ</td>
            <td>&amp;#131;</td>
            <td>Latin small letter f with hook</td>
          </tr>
          <tr>
            <td>132</td>
            <td>204</td>
            <td>84</td>
            <td>10000100</td>
            <td>„</td>
            <td>&amp;#132;</td>
            <td>Double low-9 quotation mark</td>
          </tr>
          <tr>
            <td>133</td>
            <td>205</td>
            <td>85</td>
            <td>10000101</td>
            <td>…</td>
            <td>&amp;#133;</td>
            <td>Horizontal ellipsis</td>
          </tr>
          <tr>
            <td>134</td>
            <td>206</td>
            <td>86</td>
            <td>10000110</td>
            <td>†</td>
            <td>&amp;#134;</td>
            <td>Dagger</td>
          </tr>
          <tr>
            <td>135</td>
            <td>207</td>
            <td>87</td>
            <td>10000111</td>
            <td>‡</td>
            <td>&amp;#135;</td>
            <td>Double dagger</td>
          </tr>
          <tr>
            <td>136</td>
            <td>210</td>
            <td>88</td>
            <td>10001000</td>
            <td>ˆ</td>
            <td>&amp;#136;</td>
            <td>Modifier letter circumflex accent</td>
          </tr>
          <tr>
            <td>137</td>
            <td>211</td>
            <td>89</td>
            <td>10001001</td>
            <td>‰</td>
            <td>&amp;#137;</td>
            <td>Per mille sign</td>
          </tr>
          <tr>
            <td>138</td>
            <td>212</td>
            <td>8A</td>
            <td>10001010</td>
            <td>Š</td>
            <td>&amp;#138;</td>
            <td>Latin capital letter S with caron</td>
          </tr>
          <tr>
            <td>139</td>
            <td>213</td>
            <td>8B</td>
            <td>10001011</td>
            <td>‹</td>
            <td>&amp;#139;</td>
            <td>Single left-pointing angle quotation</td>
          </tr>
          <tr>
            <td>140</td>
            <td>214</td>
            <td>8C</td>
            <td>10001100</td>
            <td>Œ</td>
            <td>&amp;#140;</td>
            <td>Latin capital ligature OE</td>
          </tr>
          <tr>
            <td>141</td>
            <td>215</td>
            <td>8D</td>
            <td>10001101</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>142</td>
            <td>216</td>
            <td>8E</td>
            <td>10001110</td>
            <td>Ž</td>
            <td>&amp;#142;</td>
            <td>Latin capital letter Z with caron</td>
          </tr>
          <tr>
            <td>143</td>
            <td>217</td>
            <td>8F</td>
            <td>10001111</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>144</td>
            <td>220</td>
            <td>90</td>
            <td>10010000</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>145</td>
            <td>221</td>
            <td>91</td>
            <td>10010001</td>
            <td>‘</td>
            <td>&amp;#145;</td>
            <td>Left single quotation mark</td>
          </tr>
          <tr>
            <td>146</td>
            <td>222</td>
            <td>92</td>
            <td>10010010</td>
            <td>’</td>
            <td>&amp;#146;</td>
            <td>Right single quotation mark</td>
          </tr>
          <tr>
            <td>147</td>
            <td>223</td>
            <td>93</td>
            <td>10010011</td>
            <td>“</td>
            <td>&amp;#147;</td>
            <td>Left double quotation mark</td>
          </tr>
          <tr>
            <td>148</td>
            <td>224</td>
            <td>94</td>
            <td>10010100</td>
            <td>”</td>
            <td>&amp;#148;</td>
            <td>Right double quotation mark</td>
          </tr>
          <tr>
            <td>149</td>
            <td>225</td>
            <td>95</td>
            <td>10010101</td>
            <td>•</td>
            <td>&amp;#149;</td>
            <td>Bullet</td>
          </tr>
          <tr>
            <td>150</td>
            <td>226</td>
            <td>96</td>
            <td>10010110</td>
            <td>–</td>
            <td>&amp;#150;</td>
            <td>En dash</td>
          </tr>
          <tr>
            <td>151</td>
            <td>227</td>
            <td>97</td>
            <td>10010111</td>
            <td>—</td>
            <td>&amp;#151;</td>
            <td>Em dash</td>
          </tr>
          <tr>
            <td>152</td>
            <td>230</td>
            <td>98</td>
            <td>10011000</td>
            <td>˜</td>
            <td>&amp;#152;</td>
            <td>Small tilde</td>
          </tr>
          <tr>
            <td>153</td>
            <td>231</td>
            <td>99</td>
            <td>10011001</td>
            <td>™</td>
            <td>&amp;#153;</td>
            <td>Trade mark sign</td>
          </tr>
          <tr>
            <td>154</td>
            <td>232</td>
            <td>9A</td>
            <td>10011010</td>
            <td>š</td>
            <td>&amp;#154;</td>
            <td>Latin small letter S with caron</td>
          </tr>
          <tr>
            <td>155</td>
            <td>233</td>
            <td>9B</td>
            <td>10011011</td>
            <td>›</td>
            <td>&amp;#155;</td>
            <td>Single right-pointing angle quotation mark</td>
          </tr>
          <tr>
            <td>156</td>
            <td>234</td>
            <td>9C</td>
            <td>10011100</td>
            <td>œ</td>
            <td>&amp;#156;</td>
            <td>Latin small ligature oe</td>
          </tr>
          <tr>
            <td>157</td>
            <td>235</td>
            <td>9D</td>
            <td>10011101</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>158</td>
            <td>236</td>
            <td>9E</td>
            <td>10011110</td>
            <td>ž</td>
            <td>&amp;#158;</td>
            <td>Latin small letter z with caron</td>
          </tr>
          <tr>
            <td>159</td>
            <td>237</td>
            <td>9F</td>
            <td>10011111</td>
            <td>Ÿ</td>
            <td>&amp;#159;</td>
            <td>Latin capital letter Y with diaeresis</td>
          </tr>
          <tr>
            <td>160</td>
            <td>240</td>
            <td>A0</td>
            <td>10100000</td>
            <td>&nbsp;</td>
            <td>&amp;#160;</td>
            <td>Non-breaking space</td>
          </tr>
          <tr>
            <td>161</td>
            <td>241</td>
            <td>A1</td>
            <td>10100001</td>
            <td>¡</td>
            <td>&amp;#161;</td>
            <td>Inverted exclamation mark</td>
          </tr>
          <tr>
            <td>162</td>
            <td>242</td>
            <td>A2</td>
            <td>10100010</td>
            <td>¢</td>
            <td>&amp;#162;</td>
            <td>Cent sign</td>
          </tr>
          <tr>
            <td>163</td>
            <td>243</td>
            <td>A3</td>
            <td>10100011</td>
            <td>£</td>
            <td>&amp;#163;</td>
            <td>Pound sign</td>
          </tr>
          <tr>
            <td>164</td>
            <td>244</td>
            <td>A4</td>
            <td>10100100</td>
            <td>¤</td>
            <td>&amp;#164;</td>
            <td>Currency sign</td>
          </tr>
          <tr>
            <td>165</td>
            <td>245</td>
            <td>A5</td>
            <td>10100101</td>
            <td>¥</td>
            <td>&amp;#165;</td>
            <td>Yen sign</td>
          </tr>
          <tr>
            <td>166</td>
            <td>246</td>
            <td>A6</td>
            <td>10100110</td>
            <td>¦</td>
            <td>&amp;#166;</td>
            <td>Pipe, Broken vertical bar</td>
          </tr>
          <tr>
            <td>167</td>
            <td>247</td>
            <td>A7</td>
            <td>10100111</td>
            <td>§</td>
            <td>&amp;#167;</td>
            <td>Section sign</td>
          </tr>
          <tr>
            <td>168</td>
            <td>250</td>
            <td>A8</td>
            <td>10101000</td>
            <td>¨</td>
            <td>&amp;#168;</td>
            <td>Spacing diaeresis - umlaut</td>
          </tr>
          <tr>
            <td>169</td>
            <td>251</td>
            <td>A9</td>
            <td>10101001</td>
            <td>©</td>
            <td>&amp;#169;</td>
            <td>Copyright sign</td>
          </tr>
          <tr>
            <td>170</td>
            <td>252</td>
            <td>AA</td>
            <td>10101010</td>
            <td>ª</td>
            <td>&amp;#170;</td>
            <td>Feminine ordinal indicator</td>
          </tr>
          <tr>
            <td>171</td>
            <td>253</td>
            <td>AB</td>
            <td>10101011</td>
            <td>«</td>
            <td>&amp;#171;</td>
            <td>Left double angle quotes</td>
          </tr>
          <tr>
            <td>172</td>
            <td>254</td>
            <td>AC</td>
            <td>10101100</td>
            <td>¬</td>
            <td>&amp;#172;</td>
            <td>Not sign</td>
          </tr>
          <tr>
            <td>173</td>
            <td>255</td>
            <td>AD</td>
            <td>10101101</td>
            <td>­</td>
            <td>&amp;#173;</td>
            <td>Soft hyphen</td>
          </tr>
          <tr>
            <td>174</td>
            <td>256</td>
            <td>AE</td>
            <td>10101110</td>
            <td>®</td>
            <td>&amp;#174;</td>
            <td>Registered trade mark sign</td>
          </tr>
          <tr>
            <td>175</td>
            <td>257</td>
            <td>AF</td>
            <td>10101111</td>
            <td>¯</td>
            <td>&amp;#175;</td>
            <td>Spacing macron - overline</td>
          </tr>
          <tr>
            <td>176</td>
            <td>260</td>
            <td>B0</td>
            <td>10110000</td>
            <td>°</td>
            <td>&amp;#176;</td>
            <td>Degree sign</td>
          </tr>
          <tr>
            <td>177</td>
            <td>261</td>
            <td>B1</td>
            <td>10110001</td>
            <td>±</td>
            <td>&amp;#177;</td>
            <td>Plus-or-minus sign</td>
          </tr>
          <tr>
            <td>178</td>
            <td>262</td>
            <td>B2</td>
            <td>10110010</td>
            <td>²</td>
            <td>&amp;#178;</td>
            <td>Superscript two - squared</td>
          </tr>
          <tr>
            <td>179</td>
            <td>263</td>
            <td>B3</td>
            <td>10110011</td>
            <td>³</td>
            <td>&amp;#179;</td>
            <td>Superscript three - cubed</td>
          </tr>
          <tr>
            <td>180</td>
            <td>264</td>
            <td>B4</td>
            <td>10110100</td>
            <td>´</td>
            <td>&amp;#180;</td>
            <td>Acute accent - spacing acute</td>
          </tr>
          <tr>
            <td>181</td>
            <td>265</td>
            <td>B5</td>
            <td>10110101</td>
            <td>µ</td>
            <td>&amp;#181;</td>
            <td>Micro sign</td>
          </tr>
          <tr>
            <td>182</td>
            <td>266</td>
            <td>B6</td>
            <td>10110110</td>
            <td>¶</td>
            <td>&amp;#182;</td>
            <td>Pilcrow sign - paragraph sign</td>
          </tr>
          <tr>
            <td>183</td>
            <td>267</td>
            <td>B7</td>
            <td>10110111</td>
            <td>·</td>
            <td>&amp;#183;</td>
            <td>Middle dot - Georgian comma</td>
          </tr>
          <tr>
            <td>184</td>
            <td>270</td>
            <td>B8</td>
            <td>10111000</td>
            <td>¸</td>
            <td>&amp;#184;</td>
            <td>Spacing cedilla</td>
          </tr>
          <tr>
            <td>185</td>
            <td>271</td>
            <td>B9</td>
            <td>10111001</td>
            <td>¹</td>
            <td>&amp;#185;</td>
            <td>Superscript one</td>
          </tr>
          <tr>
            <td>186</td>
            <td>272</td>
            <td>BA</td>
            <td>10111010</td>
            <td>º</td>
            <td>&amp;#186;</td>
            <td>Masculine ordinal indicator</td>
          </tr>
          <tr>
            <td>187</td>
            <td>273</td>
            <td>BB</td>
            <td>10111011</td>
            <td>»</td>
            <td>&amp;#187;</td>
            <td>Right double angle quotes</td>
          </tr>
          <tr>
            <td>188</td>
            <td>274</td>
            <td>BC</td>
            <td>10111100</td>
            <td>¼</td>
            <td>&amp;#188;</td>
            <td>Fraction one quarter</td>
          </tr>
          <tr>
            <td>189</td>
            <td>275</td>
            <td>BD</td>
            <td>10111101</td>
            <td>½</td>
            <td>&amp;#189;</td>
            <td>Fraction one half</td>
          </tr>
          <tr>
            <td>190</td>
            <td>276</td>
            <td>BE</td>
            <td>10111110</td>
            <td>¾</td>
            <td>&amp;#190;</td>
            <td>Fraction three quarters</td>
          </tr>
          <tr>
            <td>191</td>
            <td>277</td>
            <td>BF</td>
            <td>10111111</td>
            <td>¿</td>
            <td>&amp;#191;</td>
            <td>Inverted question mark</td>
          </tr>
          <tr>
            <td>192</td>
            <td>300</td>
            <td>C0</td>
            <td>11000000</td>
            <td>À</td>
            <td>&amp;#192;</td>
            <td>Latin capital letter A with grave</td>
          </tr>
          <tr>
            <td>193</td>
            <td>301</td>
            <td>C1</td>
            <td>11000001</td>
            <td>Á</td>
            <td>&amp;#193;</td>
            <td>Latin capital letter A with acute</td>
          </tr>
          <tr>
            <td>194</td>
            <td>302</td>
            <td>C2</td>
            <td>11000010</td>
            <td>Â</td>
            <td>&amp;#194;</td>
            <td>Latin capital letter A with circumflex</td>
          </tr>
          <tr>
            <td>195</td>
            <td>303</td>
            <td>C3</td>
            <td>11000011</td>
            <td>Ã</td>
            <td>&amp;#195;</td>
            <td>Latin capital letter A with tilde</td>
          </tr>
          <tr>
            <td>196</td>
            <td>304</td>
            <td>C4</td>
            <td>11000100</td>
            <td>Ä</td>
            <td>&amp;#196;</td>
            <td>Latin capital letter A with diaeresis</td>
          </tr>
          <tr>
            <td>197</td>
            <td>305</td>
            <td>C5</td>
            <td>11000101</td>
            <td>Å</td>
            <td>&amp;#197;</td>
            <td>Latin capital letter A with ring above</td>
          </tr>
          <tr>
            <td>198</td>
            <td>306</td>
            <td>C6</td>
            <td>11000110</td>
            <td>Æ</td>
            <td>&amp;#198;</td>
            <td>Latin capital letter AE</td>
          </tr>
          <tr>
            <td>199</td>
            <td>307</td>
            <td>C7</td>
            <td>11000111</td>
            <td>Ç</td>
            <td>&amp;#199;</td>
            <td>Latin capital letter C with cedilla</td>
          </tr>
          <tr>
            <td>200</td>
            <td>310</td>
            <td>C8</td>
            <td>11001000</td>
            <td>È</td>
            <td>&amp;#200;</td>
            <td>Latin capital letter E with grave</td>
          </tr>
          <tr>
            <td>201</td>
            <td>311</td>
            <td>C9</td>
            <td>11001001</td>
            <td>É</td>
            <td>&amp;#201;</td>
            <td>Latin capital letter E with acute</td>
          </tr>
          <tr>
            <td>202</td>
            <td>312</td>
            <td>CA</td>
            <td>11001010</td>
            <td>Ê</td>
            <td>&amp;#202;</td>
            <td>Latin capital letter E with circumflex</td>
          </tr>
          <tr>
            <td>203</td>
            <td>313</td>
            <td>CB</td>
            <td>11001011</td>
            <td>Ë</td>
            <td>&amp;#203;</td>
            <td>Latin capital letter E with diaeresis</td>
          </tr>
          <tr>
            <td>204</td>
            <td>314</td>
            <td>CC</td>
            <td>11001100</td>
            <td>Ì</td>
            <td>&amp;#204;</td>
            <td>Latin capital letter I with grave</td>
          </tr>
          <tr>
            <td>205</td>
            <td>315</td>
            <td>CD</td>
            <td>11001101</td>
            <td>Í</td>
            <td>&amp;#205;</td>
            <td>Latin capital letter I with acute</td>
          </tr>
          <tr>
            <td>206</td>
            <td>316</td>
            <td>CE</td>
            <td>11001110</td>
            <td>Î</td>
            <td>&amp;#206;</td>
            <td>Latin capital letter I with circumflex</td>
          </tr>
          <tr>
            <td>207</td>
            <td>317</td>
            <td>CF</td>
            <td>11001111</td>
            <td>Ï</td>
            <td>&amp;#207;</td>
            <td>Latin capital letter I with diaeresis</td>
          </tr>
          <tr>
            <td>208</td>
            <td>320</td>
            <td>D0</td>
            <td>11010000</td>
            <td>Ð</td>
            <td>&amp;#208;</td>
            <td>Latin capital letter ETH</td>
          </tr>
          <tr>
            <td>209</td>
            <td>321</td>
            <td>D1</td>
            <td>11010001</td>
            <td>Ñ</td>
            <td>&amp;#209;</td>
            <td>Latin capital letter N with tilde</td>
          </tr>
          <tr>
            <td>210</td>
            <td>322</td>
            <td>D2</td>
            <td>11010010</td>
            <td>Ò</td>
            <td>&amp;#210;</td>
            <td>Latin capital letter O with grave</td>
          </tr>
          <tr>
            <td>211</td>
            <td>323</td>
            <td>D3</td>
            <td>11010011</td>
            <td>Ó</td>
            <td>&amp;#211;</td>
            <td>Latin capital letter O with acute</td>
          </tr>
          <tr>
            <td>212</td>
            <td>324</td>
            <td>D4</td>
            <td>11010100</td>
            <td>Ô</td>
            <td>&amp;#212;</td>
            <td>Latin capital letter O with circumflex</td>
          </tr>
          <tr>
            <td>213</td>
            <td>325</td>
            <td>D5</td>
            <td>11010101</td>
            <td>Õ</td>
            <td>&amp;#213;</td>
            <td>Latin capital letter O with tilde</td>
          </tr>
          <tr>
            <td>214</td>
            <td>326</td>
            <td>D6</td>
            <td>11010110</td>
            <td>Ö</td>
            <td>&amp;#214;</td>
            <td>Latin capital letter O with diaeresis</td>
          </tr>
          <tr>
            <td>215</td>
            <td>327</td>
            <td>D7</td>
            <td>11010111</td>
            <td>×</td>
            <td>&amp;#215;</td>
            <td>Multiplication sign</td>
          </tr>
          <tr>
            <td>216</td>
            <td>330</td>
            <td>D8</td>
            <td>11011000</td>
            <td>Ø</td>
            <td>&amp;#216;</td>
            <td>Latin capital letter O with slash</td>
          </tr>
          <tr>
            <td>217</td>
            <td>331</td>
            <td>D9</td>
            <td>11011001</td>
            <td>Ù</td>
            <td>&amp;#217;</td>
            <td>Latin capital letter U with grave</td>
          </tr>
          <tr>
            <td>218</td>
            <td>332</td>
            <td>DA</td>
            <td>11011010</td>
            <td>Ú</td>
            <td>&amp;#218;</td>
            <td>Latin capital letter U with acute</td>
          </tr>
          <tr>
            <td>219</td>
            <td>333</td>
            <td>DB</td>
            <td>11011011</td>
            <td>Û</td>
            <td>&amp;#219;</td>
            <td>Latin capital letter U with circumflex</td>
          </tr>
          <tr>
            <td>220</td>
            <td>334</td>
            <td>DC</td>
            <td>11011100</td>
            <td>Ü</td>
            <td>&amp;#220;</td>
            <td>Latin capital letter U with diaeresis</td>
          </tr>
          <tr>
            <td>221</td>
            <td>335</td>
            <td>DD</td>
            <td>11011101</td>
            <td>Ý</td>
            <td>&amp;#221;</td>
            <td>Latin capital letter Y with acute</td>
          </tr>
          <tr>
            <td>222</td>
            <td>336</td>
            <td>DE</td>
            <td>11011110</td>
            <td>Þ</td>
            <td>&amp;#222;</td>
            <td>Latin capital letter THORN</td>
          </tr>
          <tr>
            <td>223</td>
            <td>337</td>
            <td>DF</td>
            <td>11011111</td>
            <td>ß</td>
            <td>&amp;#223;</td>
            <td>Latin small letter sharp s - ess-zed</td>
          </tr>
          <tr>
            <td>224</td>
            <td>340</td>
            <td>E0</td>
            <td>11100000</td>
            <td>à</td>
            <td>&amp;#224;</td>
            <td>Latin small letter a with grave</td>
          </tr>
          <tr>
            <td>225</td>
            <td>341</td>
            <td>E1</td>
            <td>11100001</td>
            <td>á</td>
            <td>&amp;#225;</td>
            <td>Latin small letter a with acute</td>
          </tr>
          <tr>
            <td>226</td>
            <td>342</td>
            <td>E2</td>
            <td>11100010</td>
            <td>â</td>
            <td>&amp;#226;</td>
            <td>Latin small letter a with circumflex</td>
          </tr>
          <tr>
            <td>227</td>
            <td>343</td>
            <td>E3</td>
            <td>11100011</td>
            <td>ã</td>
            <td>&amp;#227;</td>
            <td>Latin small letter a with tilde</td>
          </tr>
          <tr>
            <td>228</td>
            <td>344</td>
            <td>E4</td>
            <td>11100100</td>
            <td>ä</td>
            <td>&amp;#228;</td>
            <td>Latin small letter a with diaeresis</td>
          </tr>
          <tr>
            <td>229</td>
            <td>345</td>
            <td>E5</td>
            <td>11100101</td>
            <td>å</td>
            <td>&amp;#229;</td>
            <td>Latin small letter a with ring above</td>
          </tr>
          <tr>
            <td>230</td>
            <td>346</td>
            <td>E6</td>
            <td>11100110</td>
            <td>æ</td>
            <td>&amp;#230;</td>
            <td>Latin small letter ae</td>
          </tr>
          <tr>
            <td>231</td>
            <td>347</td>
            <td>E7</td>
            <td>11100111</td>
            <td>ç</td>
            <td>&amp;#231;</td>
            <td>Latin small letter c with cedilla</td>
          </tr>
          <tr>
            <td>232</td>
            <td>350</td>
            <td>E8</td>
            <td>11101000</td>
            <td>è</td>
            <td>&amp;#232;</td>
            <td>Latin small letter e with grave</td>
          </tr>
          <tr>
            <td>233</td>
            <td>351</td>
            <td>E9</td>
            <td>11101001</td>
            <td>é</td>
            <td>&amp;#233;</td>
            <td>Latin small letter e with acute</td>
          </tr>
          <tr>
            <td>234</td>
            <td>352</td>
            <td>EA</td>
            <td>11101010</td>
            <td>ê</td>
            <td>&amp;#234;</td>
            <td>Latin small letter e with circumflex</td>
          </tr>
          <tr>
            <td>235</td>
            <td>353</td>
            <td>EB</td>
            <td>11101011</td>
            <td>ë</td>
            <td>&amp;#235;</td>
            <td>Latin small letter e with diaeresis</td>
          </tr>
          <tr>
            <td>236</td>
            <td>354</td>
            <td>EC</td>
            <td>11101100</td>
            <td>ì</td>
            <td>&amp;#236;</td>
            <td>Latin small letter i with grave</td>
          </tr>
          <tr>
            <td>237</td>
            <td>355</td>
            <td>ED</td>
            <td>11101101</td>
            <td>í</td>
            <td>&amp;#237;</td>
            <td>Latin small letter i with acute</td>
          </tr>
          <tr>
            <td>238</td>
            <td>356</td>
            <td>EE</td>
            <td>11101110</td>
            <td>î</td>
            <td>&amp;#238;</td>
            <td>Latin small letter i with circumflex</td>
          </tr>
          <tr>
            <td>239</td>
            <td>357</td>
            <td>EF</td>
            <td>11101111</td>
            <td>ï</td>
            <td>&amp;#239;</td>
            <td>Latin small letter i with diaeresis</td>
          </tr>
          <tr>
            <td>240</td>
            <td>360</td>
            <td>F0</td>
            <td>11110000</td>
            <td>ð</td>
            <td>&amp;#240;</td>
            <td>Latin small letter eth</td>
          </tr>
          <tr>
            <td>241</td>
            <td>361</td>
            <td>F1</td>
            <td>11110001</td>
            <td>ñ</td>
            <td>&amp;#241;</td>
            <td>Latin small letter n with tilde</td>
          </tr>
          <tr>
            <td>242</td>
            <td>362</td>
            <td>F2</td>
            <td>11110010</td>
            <td>ò</td>
            <td>&amp;#242;</td>
            <td>Latin small letter o with grave</td>
          </tr>
          <tr>
            <td>243</td>
            <td>363</td>
            <td>F3</td>
            <td>11110011</td>
            <td>ó</td>
            <td>&amp;#243;</td>
            <td>Latin small letter o with acute</td>
          </tr>
          <tr>
            <td>244</td>
            <td>364</td>
            <td>F4</td>
            <td>11110100</td>
            <td>ô</td>
            <td>&amp;#244;</td>
            <td>Latin small letter o with circumflex</td>
          </tr>
          <tr>
            <td>245</td>
            <td>365</td>
            <td>F5</td>
            <td>11110101</td>
            <td>õ</td>
            <td>&amp;#245;</td>
            <td>Latin small letter o with tilde</td>
          </tr>
          <tr>
            <td>246</td>
            <td>366</td>
            <td>F6</td>
            <td>11110110</td>
            <td>ö</td>
            <td>&amp;#246;</td>
            <td>Latin small letter o with diaeresis</td>
          </tr>
          <tr>
            <td>247</td>
            <td>367</td>
            <td>F7</td>
            <td>11110111</td>
            <td>÷</td>
            <td>&amp;#247;</td>
            <td>Division sign</td>
          </tr>
          <tr>
            <td>248</td>
            <td>370</td>
            <td>F8</td>
            <td>11111000</td>
            <td>ø</td>
            <td>&amp;#248;</td>
            <td>Latin small letter o with slash</td>
          </tr>
          <tr>
            <td>249</td>
            <td>371</td>
            <td>F9</td>
            <td>11111001</td>
            <td>ù</td>
            <td>&amp;#249;</td>
            <td>Latin small letter u with grave</td>
          </tr>
          <tr>
            <td>250</td>
            <td>372</td>
            <td>FA</td>
            <td>11111010</td>
            <td>ú</td>
            <td>&amp;#250;</td>
            <td>Latin small letter u with acute</td>
          </tr>
          <tr>
            <td>251</td>
            <td>373</td>
            <td>FB</td>
            <td>11111011</td>
            <td>û</td>
            <td>&amp;#251;</td>
            <td>Latin small letter u with circumflex</td>
          </tr>
          <tr>
            <td>252</td>
            <td>374</td>
            <td>FC</td>
            <td>11111100</td>
            <td>ü</td>
            <td>&amp;#252;</td>
            <td>Latin small letter u with diaeresis</td>
          </tr>
          <tr>
            <td>253</td>
            <td>375</td>
            <td>FD</td>
            <td>11111101</td>
            <td>ý</td>
            <td>&amp;#253;</td>
            <td>Latin small letter y with acute</td>
          </tr>
          <tr>
            <td>254</td>
            <td>376</td>
            <td>FE</td>
            <td>11111110</td>
            <td>þ</td>
            <td>&amp;#254;</td>
            <td>Latin small letter thorn</td>
          </tr>
          <tr>
            <td>255</td>
            <td>377</td>
            <td>FF</td>
            <td>11111111</td>
            <td>ÿ</td>
            <td>&amp;#255;</td>
            <td>Latin small letter y with diaeresis</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Ascii
