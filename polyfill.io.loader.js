var polyfills = {
    load: function (polyfillsArr, callback, error) {
        if (polyfillsArr.length == 0) {
            return callback()
        }
        var toAdd = ""

        for (var i = 0; i < polyfillsArr.length; i++) {
            let polyfillExists = !!polyfills.polyfills[polyfillsArr[i]]
            if (!polyfillExists) break
            let browserHas = !!polyfills.polyfills[polyfillsArr[i]]()
            if (!browserHas) {
                toAdd += polyfillsArr[i]
                toAdd += ","
            }
        }
        if (toAdd[toAdd.length - 1] == ",") toAdd = toAdd.slice(0, -1)
        if (!toAdd) return callback()
        polyfills.loadPolyfills(toAdd, callback, error)
    },
    loadPolyfills: function (polyStr, callback, error) {
        var xhr = new XMLHttpRequest()
        xhr.open(
            "GET",
            "https://cdn.polyfill.io/v2/polyfill.min.js?features=" +
            polyStr +
            "&flags=gated,always&ua=chrome/50&callback=main"
        )
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                eval(xhr.response)
                callback()
            } else {
                error(xhr.response)
            }
        }
        xhr.onerror = function () {
            error({
                status: this.status,
                statusText: xhr.statusText
            })
        }
        xhr.send()
    },
    polyfills: {
        "Object.assign": function () {
            if ("assign" in Object) return true
        },
        IntersectionObserver: function () {
            if ("IntersectionObserver" in window) return true
        },
        "Element.prototype.after": function () {
            if ("after" in Element.prototype) return true
        },
        Promise: function () {
            if ("Promise" in window) return true
        },
        fetch: function () {
            if ("fetch" in window) return true
        }
    }
}
