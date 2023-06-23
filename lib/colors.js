export default function colors(h,s,v) {
    let palette = [...Array(10).keys()].map(v => 10*v)
    palette.push(95)
    palette.push(98)
    palette.push(99)
    let extendedColor = {
        light: {
            primary: {},
        },
        dark: {
            primary: {},
        },
        neutral: {},
    }
    palette.forEach(l => {
        extendedColor.neutral[l] = `hsl(${h},25%,${l}%)`
        extendedColor.dark.primary[l] = `hsl(${h},60%,${l}%)`
        extendedColor.light.primary[l] = `hsl(${h},90%,${l}%)`
    })

    extendedColor.light.primary["DEFAULT"] = extendedColor.light.primary[40]
    extendedColor.dark.primary["DEFAULT"] = extendedColor.light.primary[50]

    // Background and text
    extendedColor.light.bg = extendedColor.light.primary[95]
    extendedColor.light.headings = extendedColor.light.primary[10]
    extendedColor.light.text = extendedColor.neutral[20]

    extendedColor.dark.bg = extendedColor.dark.primary[10]
    extendedColor.dark.headings = extendedColor.dark.primary[95]
    extendedColor.dark.text = extendedColor.neutral[80]

    // Container elements
 
    extendedColor.light.container = extendedColor.light.primary[98]
    extendedColor.light["container-headings"] = extendedColor.light.primary[10]
    extendedColor.light["container-text"] = extendedColor.neutral[20]
    extendedColor.light["container-text-low"] = extendedColor.neutral[40]

    extendedColor.dark.container = extendedColor.dark.primary[98]
    extendedColor.dark["container-headings"] = extendedColor.dark.primary[10]
    extendedColor.dark["container-text"] = extendedColor.neutral[20]
    extendedColor.dark["container-text-low"] = extendedColor.neutral[40]

    return extendedColor;
}
