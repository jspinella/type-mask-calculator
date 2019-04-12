# type-mask-calculator
Type Mask Calculator for iOS Carrier Bundles

This is a helpful web app that allows one to easily experiment with type-mask values, which are derived from binary (values being true or false). It's helpful to know what binary is, but the gist is that the value of type-mask in an iOS carrier bundle is the total number of "enabled" options/values/features (as denoted by the value "1").


1 1  
_ _  
2 1

Imagine having two light switches. One for your living room, and one for your dining room. If both are on, your "type-mask" value is "3" (because 1 + 2 = 3).

If one of the lights is off, your "type-mask" value would be 1 or 2, depending on the light that is off"

1 0  
_ _  
2 1

iOS determines the cellular/carrier features it should enable, like MMS and Portable Hotspot, based on the type-mask value in the current carrier's carrier bundle. Since it is based in binary, the only way you can get a certain value, say 32,772, is by setting very particular options to "true" or "enabled". There is only one combination of ffeatures that will give me 32,772 for the type-mask value, and therefore iOS can translate that to determine which features should be enabled.
