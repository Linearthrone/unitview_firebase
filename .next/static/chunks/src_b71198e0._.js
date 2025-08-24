(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size
        }), className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 40,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, this));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, this);
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/facility/create-unit-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CreateUnitDialog": (()=>CreateUnitDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CreateUnitDialog({ open, onClose, onCreateUnit }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        designation: '',
        roomCount: 0,
        roomRanges: [
            ''
        ],
        nurseCardCount: 2,
        pctCardCount: 1,
        hasChargeNurse: true,
        hasUnitClerk: true
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.designation.trim()) {
            newErrors.designation = 'Unit designation is required';
        }
        if (formData.roomCount <= 0) {
            newErrors.roomCount = 'Number of rooms must be greater than 0';
        }
        if (formData.roomRanges.length === 0 || !formData.roomRanges[0]) {
            newErrors.roomRanges = 'At least one room range is required';
        } else {
            // Validate room range format (e.g., 401-412)
            const invalidRanges = formData.roomRanges.filter((range)=>{
                if (!range) return true;
                const parts = range.split('-');
                if (parts.length !== 2) return true;
                const [start, end] = parts.map((p)=>parseInt(p.trim(), 10));
                return isNaN(start) || isNaN(end) || start >= end;
            });
            if (invalidRanges.length > 0) {
                newErrors.roomRanges = 'Room ranges must be in format "start-end" (e.g., 401-412)';
            }
        }
        if (formData.nurseCardCount <= 0) {
            newErrors.nurseCardCount = 'Number of nurse cards must be greater than 0';
        }
        if (formData.pctCardCount < 0) {
            newErrors.pctCardCount = 'Number of PCT cards cannot be negative';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e)=>{
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target;
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (name === 'roomRanges') {
            // Handle room ranges as comma-separated values
            setFormData({
                ...formData,
                roomRanges: value.split(',').map((range)=>range.trim()).filter(Boolean)
            });
        } else if (name === 'roomCount' || name === 'nurseCardCount' || name === 'pctCardCount') {
            // Convert string to number for numeric fields
            setFormData({
                ...formData,
                [name]: parseInt(value, 10) || 0
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
        // Clear error for this field if it exists
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateForm()) {
            onCreateUnit(formData);
            // Reset form
            setFormData({
                designation: '',
                roomCount: 0,
                roomRanges: [
                    ''
                ],
                nurseCardCount: 2,
                pctCardCount: 1,
                hasChargeNurse: true,
                hasUnitClerk: true
            });
            setErrors({});
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Create New Unit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                            lineNumber: 113,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Fill in the details for the new unit."
                        }, void 0, false, {
                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                            lineNumber: 114,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                    lineNumber: 112,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Unit Designation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "designation",
                                            value: formData.designation,
                                            onChange: handleChange,
                                            className: `w-full p-2 border rounded ${errors.designation ? 'border-red-500' : 'border-gray-300'}`,
                                            placeholder: "e.g., 4 West"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        errors.designation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.designation
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Number of Patient Rooms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "roomCount",
                                            value: formData.roomCount,
                                            onChange: handleChange,
                                            className: `w-full p-2 border rounded ${errors.roomCount ? 'border-red-500' : 'border-gray-300'}`,
                                            min: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this),
                                        errors.roomCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.roomCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 150,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Room Number Range(s)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "roomRanges",
                                            value: formData.roomRanges.join(', '),
                                            onChange: handleChange,
                                            className: `w-full p-2 border rounded ${errors.roomRanges ? 'border-red-500' : 'border-gray-300'}`,
                                            placeholder: "e.g., 401-412, 450-455"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Enter ranges separated by commas (e.g., 401-412, 450-455)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        errors.roomRanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.roomRanges
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 171,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Standard Number of Nurse Cards"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "nurseCardCount",
                                            value: formData.nurseCardCount,
                                            onChange: handleChange,
                                            className: `w-full p-2 border rounded ${errors.nurseCardCount ? 'border-red-500' : 'border-gray-300'}`,
                                            min: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        errors.nurseCardCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.nurseCardCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Number of PCT Cards"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "pctCardCount",
                                            value: formData.pctCardCount,
                                            onChange: handleChange,
                                            className: `w-full p-2 border rounded ${errors.pctCardCount ? 'border-red-500' : 'border-gray-300'}`,
                                            min: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this),
                                        errors.pctCardCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.pctCardCount
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 207,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 194,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            name: "hasChargeNurse",
                                            checked: formData.hasChargeNurse,
                                            onChange: handleChange,
                                            className: "mr-2",
                                            id: "hasChargeNurse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            htmlFor: "hasChargeNurse",
                                            children: "Include Charge Nurse Card"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            name: "hasUnitClerk",
                                            checked: formData.hasUnitClerk,
                                            onChange: handleChange,
                                            className: "mr-2",
                                            id: "hasUnitClerk"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium",
                                            htmlFor: "hasUnitClerk",
                                            children: "Include Unit Clerk Card"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    type: "button",
                                    onClick: onClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    children: "Create Unit"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                            lineNumber: 242,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
            lineNumber: 111,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/facility/create-unit-dialog.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(CreateUnitDialog, "Nwb+JpkKKPxZNteEx58AVcakUjs=");
_c = CreateUnitDialog;
var _c;
__turbopack_context__.k.register(_c, "CreateUnitDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Switch": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/facility/module-toggle-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ModuleToggleCard": (()=>ModuleToggleCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
'use client';
;
;
function ModuleToggleCard({ module, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border rounded-lg p-4 ${module.enabled ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-lg",
                        children: module.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                        checked: module.enabled,
                        onCheckedChange: onToggle,
                        className: "data-[state=checked]:bg-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: module.description
            }, void 0, false, {
                fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-xs px-2 py-1 rounded-full ${module.enabled ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`,
                    children: module.enabled ? 'Enabled' : 'Disabled'
                }, void 0, false, {
                    fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/facility/module-toggle-card.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/facility/module-toggle-card.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ModuleToggleCard;
var _c;
__turbopack_context__.k.register(_c, "ModuleToggleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/nurse-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NurseCard": (()=>NurseCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function NurseCard({ nurse, patients, onAssign, onUnassign, onUpdate, editMode }) {
    _s();
    const [isAssigning, setIsAssigning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate total acuity for this nurse
    const totalAcuity = nurse.assignedRooms.reduce((sum, roomNumber)=>{
        const patient = patients.find((p)=>p.roomNumber === roomNumber);
        return sum + (patient ? patient.acuity : 0);
    }, 0);
    // Determine if nurse is overloaded
    const isOverloaded = totalAcuity > nurse.acuityCapacity;
    const handleNameChange = (e)=>{
        onUpdate({
            name: e.target.value
        });
    };
    const handleSpectraChange = (e)=>{
        onUpdate({
            spectraNumber: e.target.value
        });
    };
    const handleReliefChange = (e)=>{
        onUpdate({
            reliefName: e.target.value
        });
    };
    const handleAcuityCapacityChange = (e)=>{
        onUpdate({
            acuityCapacity: parseInt(e.target.value, 10) || 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border rounded-lg p-4 ${isOverloaded ? 'border-red-500 bg-red-50' : 'border-blue-200'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-medium",
                        children: "Nurse Assignment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    isOverloaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full",
                        children: "Acuity Alert"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/nurse-card.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nurse.name,
                                onChange: handleNameChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: nurse.name || 'Unassigned'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Spectra #"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nurse.spectraNumber,
                                onChange: handleSpectraChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: nurse.spectraNumber || 'N/A'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Relief"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: nurse.reliefName,
                                onChange: handleReliefChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: nurse.reliefName || 'None'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Acuity Capacity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: nurse.acuityCapacity,
                                onChange: handleAcuityCapacityChange,
                                className: "w-full p-1 border rounded text-sm",
                                min: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-2.5 rounded-full ${isOverloaded ? 'bg-red-600' : 'bg-blue-600'}`,
                                            style: {
                                                width: `${Math.min(100, totalAcuity / nurse.acuityCapacity * 100)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/nurse-card.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-xs font-medium",
                                        children: [
                                            totalAcuity,
                                            "/",
                                            nurse.acuityCapacity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/nurse-card.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs text-gray-500",
                                children: "Patient Assignments"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "text-xs py-1 h-auto",
                                onClick: ()=>setIsAssigning(!isAssigning),
                                children: isAssigning ? 'Done' : 'Assign'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1 mb-3",
                        children: nurse.assignedRooms.length > 0 ? nurse.assignedRooms.map((roomNumber)=>{
                            const patient = patients.find((p)=>p.roomNumber === roomNumber);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center p-1.5 bg-gray-50 rounded border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-sm",
                                                children: [
                                                    "Room ",
                                                    roomNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this),
                                            patient?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-xs",
                                                children: patient.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 152,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            patient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-1.5 py-0.5 rounded-full text-xs mr-2 ${patient.acuity >= 4 ? 'bg-red-100 text-red-800' : patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`,
                                                children: patient.acuity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 156,
                                                columnNumber: 23
                                            }, this),
                                            !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onUnassign(roomNumber),
                                                className: "text-red-500 text-xs hover:text-red-700",
                                                "aria-label": "Remove patient assignment",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 165,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                                        lineNumber: 154,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, roomNumber, true, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 italic",
                            children: "No patients assigned"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/nurse-card.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    isAssigning && !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 border-t pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium mb-2",
                                children: "Select a patient to assign:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-1",
                                children: patients.filter((patient)=>!patient.assigned).map((patient)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onAssign(patient.id);
                                            if (nurse.assignedRooms.length >= 5) {
                                                setIsAssigning(false);
                                            }
                                        },
                                        className: "text-xs p-1 border rounded hover:bg-blue-50 flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Room ",
                                                    patient.roomNumber
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-1.5 py-0.5 rounded-full text-xs ${patient.acuity >= 4 ? 'bg-red-100 text-red-800' : patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`,
                                                children: patient.acuity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, patient.id, true, {
                                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/nurse-card.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/nurse-card.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/nurse-card.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/nurse-card.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(NurseCard, "DnEIJKCAZIdP41oFqQUBp2uXttE=");
_c = NurseCard;
var _c;
__turbopack_context__.k.register(_c, "NurseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/pct-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PCTCard": (()=>PCTCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PCTCard({ pct, onUpdate, editMode }) {
    const handleNameChange = (e)=>{
        onUpdate({
            name: e.target.value
        });
    };
    const handleSpectraChange = (e)=>{
        onUpdate({
            spectraNumber: e.target.value
        });
    };
    const handleReliefChange = (e)=>{
        onUpdate({
            reliefName: e.target.value
        });
    };
    const handleRoomRangeChange = (e)=>{
        onUpdate({
            roomRange: e.target.value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-green-200 rounded-lg p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-medium mb-3",
                children: "Patient Care Tech"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/pct-card.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: pct.name,
                                onChange: handleNameChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: pct.name || 'Unassigned'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Spectra #"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: pct.spectraNumber,
                                onChange: handleSpectraChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: pct.spectraNumber || 'N/A'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Relief"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: pct.reliefName,
                                onChange: handleReliefChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: pct.reliefName || 'None'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/pct-card.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/pct-card.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs text-gray-500 mb-1",
                        children: "Room Assignment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: pct.roomRange,
                        onChange: handleRoomRangeChange,
                        className: "w-full p-1 border rounded text-sm",
                        placeholder: "e.g., 401-412"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-50 border border-green-200 rounded p-2 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                "Rooms ",
                                pct.roomRange
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/pct-card.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/pct-card.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/pct-card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/pct-card.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = PCTCard;
var _c;
__turbopack_context__.k.register(_c, "PCTCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/shared/staff-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StaffCard": (()=>StaffCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function StaffCard({ title, staffMember, onUpdate, editMode, size = 'normal' }) {
    const handleNameChange = (e)=>{
        onUpdate({
            name: e.target.value
        });
    };
    const handleSpectraChange = (e)=>{
        onUpdate({
            spectraNumber: e.target.value
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border ${title === 'Charge Nurse' ? 'border-purple-200' : 'border-yellow-200'} rounded-lg p-4 ${size === 'small' ? 'col-span-1' : 'col-span-1 md:col-span-2'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-medium mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/shared/staff-card.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: staffMember.name,
                                onChange: handleNameChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium",
                                children: staffMember.name || 'Unassigned'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/staff-card.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs text-gray-500",
                                children: "Spectra #"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: staffMember.spectraNumber,
                                onChange: handleSpectraChange,
                                className: "w-full p-1 border rounded text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: staffMember.spectraNumber || 'N/A'
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/staff-card.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/staff-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/staff-card.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            staffMember.role === 'chargeNurse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 pt-2 border-t border-purple-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full",
                    children: "Unit Supervisor"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/staff-card.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/staff-card.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/staff-card.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = StaffCard;
var _c;
__turbopack_context__.k.register(_c, "StaffCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase-config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db),
    "storage": (()=>storage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export p as getAuth>");
;
;
;
;
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARvbAJtv-NBJnJQ3EdZNU3WsMnXThFzhM",
    authDomain: "unitview.firebaseapp.com",
    databaseURL: "https://unitview-default-rtdb.firebaseio.com",
    projectId: "unitview",
    storageBucket: "unitview.firebasestorage.app",
    messagingSenderId: "185648925766",
    appId: "1:185648925766:web:5ae6271dd4977f6e158e47"
};
// Initialize Firebase
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length === 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])()[0];
// Initialize Firestore
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Enable offline persistence (will use the cache when offline)
try {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableIndexedDbPersistence"])(db).catch((err)=>{
        console.error("Firestore persistence error:", err);
    });
} catch (error) {
    console.warn("Firestore persistence already enabled or not supported");
}
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase-optimized.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "batchCreateNurses": (()=>batchCreateNurses),
    "batchCreatePCTs": (()=>batchCreatePCTs),
    "batchCreatePatients": (()=>batchCreatePatients),
    "batchCreateStaffMembers": (()=>batchCreateStaffMembers),
    "batchUpdatePatients": (()=>batchUpdatePatients),
    "clearCache": (()=>clearCache),
    "createNurse": (()=>createNurse),
    "createPCT": (()=>createPCT),
    "createPatient": (()=>createPatient),
    "createStaffMember": (()=>createStaffMember),
    "createUnit": (()=>createUnit),
    "deleteNurse": (()=>deleteNurse),
    "deletePCT": (()=>deletePCT),
    "deletePatient": (()=>deletePatient),
    "deleteStaffMember": (()=>deleteStaffMember),
    "deleteUnit": (()=>deleteUnit),
    "deleteUnitNurses": (()=>deleteUnitNurses),
    "deleteUnitPCTs": (()=>deleteUnitPCTs),
    "deleteUnitPatients": (()=>deleteUnitPatients),
    "deleteUnitStaff": (()=>deleteUnitStaff),
    "getModules": (()=>getModules),
    "getNursesByUnit": (()=>getNursesByUnit),
    "getPCTsByUnit": (()=>getPCTsByUnit),
    "getPatientsByUnit": (()=>getPatientsByUnit),
    "getStaffByUnit": (()=>getStaffByUnit),
    "getStaffByUnitAndRole": (()=>getStaffByUnitAndRole),
    "getUnit": (()=>getUnit),
    "getUnits": (()=>getUnits),
    "initializeModules": (()=>initializeModules),
    "initializeUnitData": (()=>initializeUnitData),
    "loadUnitData": (()=>loadUnitData),
    "setupDefaultModules": (()=>setupDefaultModules),
    "updateModule": (()=>updateModule),
    "updateNurse": (()=>updateNurse),
    "updatePCT": (()=>updatePCT),
    "updatePatient": (()=>updatePatient),
    "updateStaffMember": (()=>updateStaffMember),
    "updateUnit": (()=>updateUnit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
// Firebase Collection References
const unitsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'units');
const patientsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'patients');
const nursesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'nurses');
const pctsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'pcts');
const staffCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'staff');
const modulesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'modules');
// Cache for units data
let unitsCache = null;
let unitDataCache = new Map();
async function createUnit(unitData) {
    const timestamp = Date.now();
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection);
    const newUnit = {
        ...unitData,
        id: unitRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(unitRef, newUnit);
    // Update cache
    if (unitsCache) {
        unitsCache.push(newUnit);
    }
    return newUnit;
}
async function getUnits() {
    // Return from cache if available
    if (unitsCache) {
        return unitsCache;
    }
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(unitsCollection);
    const units = snapshot.docs.map((doc)=>doc.data());
    // Update cache
    unitsCache = units;
    return units;
}
async function getUnit(unitId) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.unit) {
        return cachedData.unit;
    }
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    const unitSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(unitRef);
    if (unitSnap.exists()) {
        const unit = unitSnap.data();
        // Update cache
        if (!unitDataCache.has(unitId)) {
            unitDataCache.set(unitId, {
                unit,
                patients: [],
                nurses: [],
                pcts: [],
                chargeNurse: null,
                unitClerk: null
            });
        } else {
            unitDataCache.get(unitId).unit = unit;
        }
        return unit;
    }
    return null;
}
async function updateUnit(unitId, data) {
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(unitRef, updateData);
    // Update cache
    if (unitsCache) {
        const index = unitsCache.findIndex((u)=>u.id === unitId);
        if (index !== -1) {
            unitsCache[index] = {
                ...unitsCache[index],
                ...updateData
            };
        }
    }
    if (unitDataCache.has(unitId) && unitDataCache.get(unitId).unit) {
        unitDataCache.get(unitId).unit = {
            ...unitDataCache.get(unitId).unit,
            ...updateData
        };
    }
}
async function deleteUnit(unitId) {
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(unitRef);
    // Delete related data
    await deleteUnitPatients(unitId);
    await deleteUnitNurses(unitId);
    await deleteUnitPCTs(unitId);
    await deleteUnitStaff(unitId);
    // Update cache
    if (unitsCache) {
        unitsCache = unitsCache.filter((u)=>u.id !== unitId);
    }
    unitDataCache.delete(unitId);
}
async function createPatient(patientData) {
    const timestamp = Date.now();
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection);
    const newPatient = {
        ...patientData,
        id: patientRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(patientRef, newPatient);
    // Update cache
    if (unitDataCache.has(patientData.unitId)) {
        unitDataCache.get(patientData.unitId).patients.push(newPatient);
    }
    return newPatient;
}
async function batchCreatePatients(patientsData) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newPatients = [];
    for (const patientData of patientsData){
        const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection);
        const newPatient = {
            ...patientData,
            id: patientRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(patientRef, newPatient);
        newPatients.push(newPatient);
        // Update cache
        if (unitDataCache.has(patientData.unitId)) {
            unitDataCache.get(patientData.unitId).patients.push(newPatient);
        }
    }
    await batch.commit();
    return newPatients;
}
async function getPatientsByUnit(unitId) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.patients.length > 0) {
        return cachedData.patients;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const patients = snapshot.docs.map((doc)=>doc.data());
    // Update cache
    if (!unitDataCache.has(unitId)) {
        unitDataCache.set(unitId, {
            unit: null,
            patients,
            nurses: [],
            pcts: [],
            chargeNurse: null,
            unitClerk: null
        });
    } else {
        unitDataCache.get(unitId).patients = patients;
    }
    return patients;
}
async function updatePatient(patientId, data) {
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, patientId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(patientRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.patients.findIndex((p)=>p.id === patientId);
        if (index !== -1) {
            cachedData.patients[index] = {
                ...cachedData.patients[index],
                ...updateData
            };
            break;
        }
    }
}
async function batchUpdatePatients(updates) {
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const timestamp = Date.now();
    for (const { id, data } of updates){
        const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, id);
        batch.update(patientRef, {
            ...data,
            updatedAt: timestamp
        });
        // Update cache
        for (const [unitId, cachedData] of unitDataCache.entries()){
            const index = cachedData.patients.findIndex((p)=>p.id === id);
            if (index !== -1) {
                cachedData.patients[index] = {
                    ...cachedData.patients[index],
                    ...data,
                    updatedAt: timestamp
                };
                break;
            }
        }
    }
    await batch.commit();
}
async function deletePatient(patientId) {
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, patientId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(patientRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.patients = cachedData.patients.filter((p)=>p.id !== patientId);
    }
}
async function deleteUnitPatients(unitId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
    // Update cache
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).patients = [];
    }
}
async function createNurse(nurseData) {
    const timestamp = Date.now();
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection);
    const newNurse = {
        ...nurseData,
        id: nurseRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(nurseRef, newNurse);
    // Update cache
    if (unitDataCache.has(nurseData.unitId)) {
        unitDataCache.get(nurseData.unitId).nurses.push(newNurse);
    }
    return newNurse;
}
async function batchCreateNurses(nursesData) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newNurses = [];
    for (const nurseData of nursesData){
        const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection);
        const newNurse = {
            ...nurseData,
            id: nurseRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(nurseRef, newNurse);
        newNurses.push(newNurse);
        // Update cache
        if (unitDataCache.has(nurseData.unitId)) {
            unitDataCache.get(nurseData.unitId).nurses.push(newNurse);
        }
    }
    await batch.commit();
    return newNurses;
}
async function getNursesByUnit(unitId) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.nurses.length > 0) {
        return cachedData.nurses;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(nursesCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const nurses = snapshot.docs.map((doc)=>doc.data());
    // Update cache
    if (!unitDataCache.has(unitId)) {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses,
            pcts: [],
            chargeNurse: null,
            unitClerk: null
        });
    } else {
        unitDataCache.get(unitId).nurses = nurses;
    }
    return nurses;
}
async function updateNurse(nurseId, data) {
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection, nurseId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(nurseRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.nurses.findIndex((n)=>n.id === nurseId);
        if (index !== -1) {
            cachedData.nurses[index] = {
                ...cachedData.nurses[index],
                ...updateData
            };
            break;
        }
    }
}
async function deleteNurse(nurseId) {
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection, nurseId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(nurseRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.nurses = cachedData.nurses.filter((n)=>n.id !== nurseId);
    }
}
async function deleteUnitNurses(unitId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(nursesCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
    // Update cache
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).nurses = [];
    }
}
async function createPCT(pctData) {
    const timestamp = Date.now();
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection);
    const newPCT = {
        ...pctData,
        id: pctRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(pctRef, newPCT);
    // Update cache
    if (unitDataCache.has(pctData.unitId)) {
        unitDataCache.get(pctData.unitId).pcts.push(newPCT);
    }
    return newPCT;
}
async function batchCreatePCTs(pctsData) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newPCTs = [];
    for (const pctData of pctsData){
        const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection);
        const newPCT = {
            ...pctData,
            id: pctRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(pctRef, newPCT);
        newPCTs.push(newPCT);
        // Update cache
        if (unitDataCache.has(pctData.unitId)) {
            unitDataCache.get(pctData.unitId).pcts.push(newPCT);
        }
    }
    await batch.commit();
    return newPCTs;
}
async function getPCTsByUnit(unitId) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.pcts.length > 0) {
        return cachedData.pcts;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(pctsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const pcts = snapshot.docs.map((doc)=>doc.data());
    // Update cache
    if (!unitDataCache.has(unitId)) {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses: [],
            pcts,
            chargeNurse: null,
            unitClerk: null
        });
    } else {
        unitDataCache.get(unitId).pcts = pcts;
    }
    return pcts;
}
async function updatePCT(pctId, data) {
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection, pctId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(pctRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.pcts.findIndex((p)=>p.id === pctId);
        if (index !== -1) {
            cachedData.pcts[index] = {
                ...cachedData.pcts[index],
                ...updateData
            };
            break;
        }
    }
}
async function deletePCT(pctId) {
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection, pctId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(pctRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.pcts = cachedData.pcts.filter((p)=>p.id !== pctId);
    }
}
async function deleteUnitPCTs(unitId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(pctsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
    // Update cache
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).pcts = [];
    }
}
async function createStaffMember(staffData) {
    const timestamp = Date.now();
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection);
    const newStaff = {
        ...staffData,
        id: staffRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(staffRef, newStaff);
    // Update cache
    if (unitDataCache.has(staffData.unitId)) {
        if (staffData.role === 'chargeNurse') {
            unitDataCache.get(staffData.unitId).chargeNurse = newStaff;
        } else if (staffData.role === 'unitClerk') {
            unitDataCache.get(staffData.unitId).unitClerk = newStaff;
        }
    }
    return newStaff;
}
async function batchCreateStaffMembers(staffData) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newStaffMembers = [];
    for (const staffMemberData of staffData){
        const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection);
        const newStaff = {
            ...staffMemberData,
            id: staffRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(staffRef, newStaff);
        newStaffMembers.push(newStaff);
        // Update cache
        if (unitDataCache.has(staffMemberData.unitId)) {
            if (staffMemberData.role === 'chargeNurse') {
                unitDataCache.get(staffMemberData.unitId).chargeNurse = newStaff;
            } else if (staffMemberData.role === 'unitClerk') {
                unitDataCache.get(staffMemberData.unitId).unitClerk = newStaff;
            }
        }
    }
    await batch.commit();
    return newStaffMembers;
}
async function getStaffByUnit(unitId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snapshot.docs.map((doc)=>doc.data());
}
async function getStaffByUnitAndRole(unitId, role) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (role === 'chargeNurse' && cachedData?.chargeNurse) {
        return cachedData.chargeNurse;
    } else if (role === 'unitClerk' && cachedData?.unitClerk) {
        return cachedData.unitClerk;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('role', '==', role));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return null;
    }
    const staffMember = snapshot.docs[0].data();
    // Update cache
    if (!unitDataCache.has(unitId)) {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses: [],
            pcts: [],
            chargeNurse: role === 'chargeNurse' ? staffMember : null,
            unitClerk: role === 'unitClerk' ? staffMember : null
        });
    } else {
        if (role === 'chargeNurse') {
            unitDataCache.get(unitId).chargeNurse = staffMember;
        } else if (role === 'unitClerk') {
            unitDataCache.get(unitId).unitClerk = staffMember;
        }
    }
    return staffMember;
}
async function updateStaffMember(staffId, data) {
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection, staffId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(staffRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        if (cachedData.chargeNurse?.id === staffId) {
            cachedData.chargeNurse = {
                ...cachedData.chargeNurse,
                ...updateData
            };
        } else if (cachedData.unitClerk?.id === staffId) {
            cachedData.unitClerk = {
                ...cachedData.unitClerk,
                ...updateData
            };
        }
    }
}
async function deleteStaffMember(staffId) {
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection, staffId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(staffRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        if (cachedData.chargeNurse?.id === staffId) {
            cachedData.chargeNurse = null;
        } else if (cachedData.unitClerk?.id === staffId) {
            cachedData.unitClerk = null;
        }
    }
}
async function deleteUnitStaff(unitId) {
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
    // Update cache
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).chargeNurse = null;
        unitDataCache.get(unitId).unitClerk = null;
    }
}
async function getModules() {
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(modulesCollection);
    return snapshot.docs.map((doc)=>doc.data());
}
async function updateModule(moduleId, enabled) {
    const moduleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(modulesCollection, moduleId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(moduleRef, {
        enabled,
        updatedAt: Date.now()
    });
}
async function initializeModules(modules) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    for (const module of modules){
        const moduleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(modulesCollection, module.id);
        const moduleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(moduleRef);
        if (!moduleSnap.exists()) {
            batch.set(moduleRef, {
                ...module,
                updatedAt: timestamp
            });
        }
    }
    await batch.commit();
}
async function setupDefaultModules() {
    const defaultModules = [
        {
            id: 'mock-patient',
            name: 'Mock Patient Data',
            description: 'Generate mock patient data for testing',
            enabled: true
        },
        {
            id: 'spectra-pool',
            name: 'Spectra Pool Management',
            description: 'Manage spectra pool assignments',
            enabled: false
        },
        {
            id: 'acuity-tracking',
            name: 'Acuity Tracking',
            description: 'Track and manage patient acuity levels',
            enabled: true
        },
        {
            id: 'bed-management',
            name: 'Bed Management',
            description: 'Track bed availability and assignments',
            enabled: true
        },
        {
            id: 'staff-messaging',
            name: 'Staff Messaging',
            description: 'Internal messaging system for staff',
            enabled: false
        }
    ];
    await initializeModules(defaultModules);
}
async function loadUnitData(unitId) {
    // Check cache first
    if (unitDataCache.has(unitId)) {
        const cachedData = unitDataCache.get(unitId);
        // If we have complete data in cache, return it
        if (cachedData.unit && (cachedData.patients.length > 0 || cachedData.nurses.length > 0 || cachedData.pcts.length > 0)) {
            return cachedData;
        }
    }
    // Load all data in parallel
    const [unit, patients, nurses, pcts, staffMembers] = await Promise.all([
        getUnit(unitId),
        getPatientsByUnit(unitId),
        getNursesByUnit(unitId),
        getPCTsByUnit(unitId),
        getStaffByUnit(unitId)
    ]);
    // Process staff members
    let chargeNurse = null;
    let unitClerk = null;
    for (const staff of staffMembers){
        if (staff.role === 'chargeNurse') {
            chargeNurse = staff;
        } else if (staff.role === 'unitClerk') {
            unitClerk = staff;
        }
    }
    // Update cache
    const unitData = {
        unit,
        patients,
        nurses,
        pcts,
        chargeNurse,
        unitClerk
    };
    unitDataCache.set(unitId, unitData);
    return unitData;
}
async function initializeUnitData(unit) {
    // Generate all the data first
    const patientsData = [];
    const nursesData = [];
    const pctsData = [];
    const staffData = [];
    // Generate patient data
    for (const range of unit.roomRanges){
        const [start, end] = range.split('-').map((num)=>parseInt(num, 10));
        for(let roomNum = start; roomNum <= end; roomNum++){
            patientsData.push({
                unitId: unit.id,
                roomNumber: roomNum.toString(),
                name: '',
                acuity: Math.floor(Math.random() * 5) + 1,
                assigned: false
            });
        }
    }
    // Generate nurse data
    for(let i = 0; i < unit.nurseCardCount; i++){
        nursesData.push({
            unitId: unit.id,
            name: `Nurse ${i + 1}`,
            spectraNumber: `SN${10000 + i}`,
            reliefName: '',
            assignedRooms: [],
            acuityCapacity: 12
        });
    }
    // Generate PCT data
    for(let i = 0; i < unit.pctCardCount; i++){
        // Divide room ranges among PCTs
        const rangeIndex = i % unit.roomRanges.length;
        const [start, end] = unit.roomRanges[rangeIndex].split('-').map((num)=>parseInt(num, 10));
        const rangeSize = end - start + 1;
        const pctRangeSize = Math.ceil(rangeSize / unit.pctCardCount);
        const pctStart = start + i * pctRangeSize;
        const pctEnd = Math.min(pctStart + pctRangeSize - 1, end);
        pctsData.push({
            unitId: unit.id,
            name: `PCT ${i + 1}`,
            spectraNumber: `PCT${10000 + i}`,
            reliefName: '',
            roomRange: `${pctStart}-${pctEnd}`
        });
    }
    // Generate staff data
    if (unit.hasChargeNurse) {
        staffData.push({
            unitId: unit.id,
            name: '',
            spectraNumber: '',
            role: 'chargeNurse'
        });
    }
    if (unit.hasUnitClerk) {
        staffData.push({
            unitId: unit.id,
            name: '',
            spectraNumber: '',
            role: 'unitClerk'
        });
    }
    // Create all data in parallel using batch operations
    const [patients, nurses, pcts, staffMembers] = await Promise.all([
        batchCreatePatients(patientsData),
        batchCreateNurses(nursesData),
        batchCreatePCTs(pctsData),
        batchCreateStaffMembers(staffData)
    ]);
    // Process staff members
    let chargeNurse = null;
    let unitClerk = null;
    for (const staff of staffMembers){
        if (staff.role === 'chargeNurse') {
            chargeNurse = staff;
        } else if (staff.role === 'unitClerk') {
            unitClerk = staff;
        }
    }
    return {
        patients,
        nurses,
        pcts,
        chargeNurse,
        unitClerk
    };
}
function clearCache() {
    unitsCache = null;
    unitDataCache.clear();
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase-optimized.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase-optimized.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/shared/patient-grid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PatientGrid": (()=>PatientGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$nurse$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/nurse-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pct$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/pct-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$staff$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/staff-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase-optimized.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase-optimized.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function PatientGrid({ unitId }) {
    _s();
    const [unit, setUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [patients, setPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [nurses, setNurses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pcts, setPCTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chargeNurse, setChargeNurse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [unitClerk, setUnitClerk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [initializing, setInitializing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingChanges, setPendingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patients: {},
        nurses: {},
        pcts: {},
        staff: {}
    });
    // Load unit data and associated staff/patients
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientGrid.useEffect": ()=>{
            const loadData = {
                "PatientGrid.useEffect.loadData": async ()=>{
                    if (!unitId) return;
                    try {
                        setLoading(true);
                        // Load all unit data at once using the optimized function
                        const unitData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["loadUnitData"])(unitId);
                        if (!unitData.unit) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                                title: 'Error',
                                description: 'Unit not found',
                                variant: 'destructive'
                            });
                            return;
                        }
                        setUnit(unitData.unit);
                        setPatients(unitData.patients);
                        setNurses(unitData.nurses);
                        setPCTs(unitData.pcts);
                        setChargeNurse(unitData.chargeNurse);
                        setUnitClerk(unitData.unitClerk);
                        // If no data exists yet, we need to initialize the unit
                        if (unitData.patients.length === 0 && unitData.nurses.length === 0) {
                            setInitializing(true);
                            const initializedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeUnitData"])(unitData.unit);
                            setPatients(initializedData.patients);
                            setNurses(initializedData.nurses);
                            setPCTs(initializedData.pcts);
                            setChargeNurse(initializedData.chargeNurse);
                            setUnitClerk(initializedData.unitClerk);
                            setInitializing(false);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                                title: 'Unit Initialized',
                                description: 'Unit data has been created successfully'
                            });
                        }
                    } catch (error) {
                        console.error('Error loading unit data:', error);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                            title: 'Error',
                            description: 'Failed to load unit data',
                            variant: 'destructive'
                        });
                    } finally{
                        setLoading(false);
                    }
                }
            }["PatientGrid.useEffect.loadData"];
            loadData();
        }
    }["PatientGrid.useEffect"], [
        unitId
    ]);
    // Memoized list of unassigned patients for better performance
    const unassignedPatients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PatientGrid.useMemo[unassignedPatients]": ()=>{
            return patients.filter({
                "PatientGrid.useMemo[unassignedPatients]": (p)=>!p.assigned
            }["PatientGrid.useMemo[unassignedPatients]"]);
        }
    }["PatientGrid.useMemo[unassignedPatients]"], [
        patients
    ]);
    // Optimistic UI update for patient assignment
    const handleAssignPatient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleAssignPatient]": async (nurseId, patientId)=>{
            try {
                // Find the nurse and patient
                const nurse = nurses.find({
                    "PatientGrid.useCallback[handleAssignPatient].nurse": (n)=>n.id === nurseId
                }["PatientGrid.useCallback[handleAssignPatient].nurse"]);
                const patient = patients.find({
                    "PatientGrid.useCallback[handleAssignPatient].patient": (p)=>p.id === patientId
                }["PatientGrid.useCallback[handleAssignPatient].patient"]);
                if (!nurse || !patient) return;
                // Update nurse assignments (optimistic update)
                const updatedAssignedRooms = [
                    ...nurse.assignedRooms
                ];
                if (!updatedAssignedRooms.includes(patient.roomNumber)) {
                    updatedAssignedRooms.push(patient.roomNumber);
                    updatedAssignedRooms.sort({
                        "PatientGrid.useCallback[handleAssignPatient]": (a, b)=>parseInt(a) - parseInt(b)
                    }["PatientGrid.useCallback[handleAssignPatient]"]);
                }
                // Update local state immediately (optimistic update)
                setNurses(nurses.map({
                    "PatientGrid.useCallback[handleAssignPatient]": (n)=>n.id === nurseId ? {
                            ...n,
                            assignedRooms: updatedAssignedRooms
                        } : n
                }["PatientGrid.useCallback[handleAssignPatient]"]));
                setPatients(patients.map({
                    "PatientGrid.useCallback[handleAssignPatient]": (p)=>p.id === patientId ? {
                            ...p,
                            assigned: true
                        } : p
                }["PatientGrid.useCallback[handleAssignPatient]"]));
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleAssignPatient]": (prev)=>({
                            ...prev,
                            nurses: {
                                ...prev.nurses,
                                [nurseId]: {
                                    assignedRooms: updatedAssignedRooms
                                }
                            },
                            patients: {
                                ...prev.patients,
                                [patientId]: {
                                    assigned: true
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleAssignPatient]"]);
                // Update in database
                await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateNurse"])(nurseId, {
                        assignedRooms: updatedAssignedRooms
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updatePatient"])(patientId, {
                        assigned: true
                    })
                ]);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleAssignPatient]": (prev)=>{
                        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
                        const { [patientId]: __, ...remainingPatients } = prev.patients;
                        return {
                            ...prev,
                            nurses: remainingNurses,
                            patients: remainingPatients
                        };
                    }
                }["PatientGrid.useCallback[handleAssignPatient]"]);
            } catch (error) {
                console.error('Error assigning patient:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to assign patient. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleAssignPatient]"], [
        nurses,
        patients
    ]);
    // Optimistic UI update for patient unassignment
    const handleUnassignPatient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleUnassignPatient]": async (nurseId, roomNumber)=>{
            try {
                // Find the nurse and patient
                const nurse = nurses.find({
                    "PatientGrid.useCallback[handleUnassignPatient].nurse": (n)=>n.id === nurseId
                }["PatientGrid.useCallback[handleUnassignPatient].nurse"]);
                const patient = patients.find({
                    "PatientGrid.useCallback[handleUnassignPatient].patient": (p)=>p.roomNumber === roomNumber
                }["PatientGrid.useCallback[handleUnassignPatient].patient"]);
                if (!nurse || !patient) return;
                // Update nurse assignments (optimistic update)
                const updatedAssignedRooms = nurse.assignedRooms.filter({
                    "PatientGrid.useCallback[handleUnassignPatient].updatedAssignedRooms": (room)=>room !== roomNumber
                }["PatientGrid.useCallback[handleUnassignPatient].updatedAssignedRooms"]);
                // Update local state immediately (optimistic update)
                setNurses(nurses.map({
                    "PatientGrid.useCallback[handleUnassignPatient]": (n)=>n.id === nurseId ? {
                            ...n,
                            assignedRooms: updatedAssignedRooms
                        } : n
                }["PatientGrid.useCallback[handleUnassignPatient]"]));
                setPatients(patients.map({
                    "PatientGrid.useCallback[handleUnassignPatient]": (p)=>p.roomNumber === roomNumber ? {
                            ...p,
                            assigned: false
                        } : p
                }["PatientGrid.useCallback[handleUnassignPatient]"]));
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleUnassignPatient]": (prev)=>({
                            ...prev,
                            nurses: {
                                ...prev.nurses,
                                [nurseId]: {
                                    assignedRooms: updatedAssignedRooms
                                }
                            },
                            patients: {
                                ...prev.patients,
                                [patient.id]: {
                                    assigned: false
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleUnassignPatient]"]);
                // Update in database
                await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateNurse"])(nurseId, {
                        assignedRooms: updatedAssignedRooms
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updatePatient"])(patient.id, {
                        assigned: false
                    })
                ]);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleUnassignPatient]": (prev)=>{
                        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
                        const { [patient.id]: __, ...remainingPatients } = prev.patients;
                        return {
                            ...prev,
                            nurses: remainingNurses,
                            patients: remainingPatients
                        };
                    }
                }["PatientGrid.useCallback[handleUnassignPatient]"]);
            } catch (error) {
                console.error('Error unassigning patient:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to unassign patient. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleUnassignPatient]"], [
        nurses,
        patients
    ]);
    // Optimistic UI update for nurse information
    const handleUpdateNurse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleUpdateNurse]": async (nurseId, data)=>{
            try {
                // Update local state immediately (optimistic update)
                setNurses(nurses.map({
                    "PatientGrid.useCallback[handleUpdateNurse]": (nurse)=>nurse.id === nurseId ? {
                            ...nurse,
                            ...data
                        } : nurse
                }["PatientGrid.useCallback[handleUpdateNurse]"]));
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateNurse]": (prev)=>({
                            ...prev,
                            nurses: {
                                ...prev.nurses,
                                [nurseId]: {
                                    ...prev.nurses[nurseId],
                                    ...data
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleUpdateNurse]"]);
                // Update in database
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateNurse"])(nurseId, data);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateNurse]": (prev)=>{
                        const { [nurseId]: _, ...remainingNurses } = prev.nurses;
                        return {
                            ...prev,
                            nurses: remainingNurses
                        };
                    }
                }["PatientGrid.useCallback[handleUpdateNurse]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Nurse Updated',
                    description: 'Nurse information has been updated'
                });
            } catch (error) {
                console.error('Error updating nurse:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to update nurse information. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleUpdateNurse]"], [
        nurses
    ]);
    // Optimistic UI update for PCT information
    const handleUpdatePCT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleUpdatePCT]": async (pctId, data)=>{
            try {
                // Update local state immediately (optimistic update)
                setPCTs(pcts.map({
                    "PatientGrid.useCallback[handleUpdatePCT]": (pct)=>pct.id === pctId ? {
                            ...pct,
                            ...data
                        } : pct
                }["PatientGrid.useCallback[handleUpdatePCT]"]));
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdatePCT]": (prev)=>({
                            ...prev,
                            pcts: {
                                ...prev.pcts,
                                [pctId]: {
                                    ...prev.pcts[pctId],
                                    ...data
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleUpdatePCT]"]);
                // Update in database
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updatePCT"])(pctId, data);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdatePCT]": (prev)=>{
                        const { [pctId]: _, ...remainingPCTs } = prev.pcts;
                        return {
                            ...prev,
                            pcts: remainingPCTs
                        };
                    }
                }["PatientGrid.useCallback[handleUpdatePCT]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'PCT Updated',
                    description: 'PCT information has been updated'
                });
            } catch (error) {
                console.error('Error updating PCT:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to update PCT information. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleUpdatePCT]"], [
        pcts
    ]);
    // Optimistic UI update for charge nurse information
    const handleUpdateChargeNurse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleUpdateChargeNurse]": async (data)=>{
            try {
                if (!chargeNurse) return;
                // Update local state immediately (optimistic update)
                setChargeNurse({
                    ...chargeNurse,
                    ...data
                });
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateChargeNurse]": (prev)=>({
                            ...prev,
                            staff: {
                                ...prev.staff,
                                [chargeNurse.id]: {
                                    ...prev.staff[chargeNurse.id],
                                    ...data
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleUpdateChargeNurse]"]);
                // Update in database
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateStaffMember"])(chargeNurse.id, data);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateChargeNurse]": (prev)=>{
                        const { [chargeNurse.id]: _, ...remainingStaff } = prev.staff;
                        return {
                            ...prev,
                            staff: remainingStaff
                        };
                    }
                }["PatientGrid.useCallback[handleUpdateChargeNurse]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Charge Nurse Updated',
                    description: 'Charge nurse information has been updated'
                });
            } catch (error) {
                console.error('Error updating charge nurse:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to update charge nurse information. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleUpdateChargeNurse]"], [
        chargeNurse
    ]);
    // Optimistic UI update for unit clerk information
    const handleUpdateUnitClerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleUpdateUnitClerk]": async (data)=>{
            try {
                if (!unitClerk) return;
                // Update local state immediately (optimistic update)
                setUnitClerk({
                    ...unitClerk,
                    ...data
                });
                // Add to pending changes
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateUnitClerk]": (prev)=>({
                            ...prev,
                            staff: {
                                ...prev.staff,
                                [unitClerk.id]: {
                                    ...prev.staff[unitClerk.id],
                                    ...data
                                }
                            }
                        })
                }["PatientGrid.useCallback[handleUpdateUnitClerk]"]);
                // Update in database
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateStaffMember"])(unitClerk.id, data);
                // Clear from pending changes after successful update
                setPendingChanges({
                    "PatientGrid.useCallback[handleUpdateUnitClerk]": (prev)=>{
                        const { [unitClerk.id]: _, ...remainingStaff } = prev.staff;
                        return {
                            ...prev,
                            staff: remainingStaff
                        };
                    }
                }["PatientGrid.useCallback[handleUpdateUnitClerk]"]);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Unit Clerk Updated',
                    description: 'Unit clerk information has been updated'
                });
            } catch (error) {
                console.error('Error updating unit clerk:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to update unit clerk information. Changes will be saved when connection is restored.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleUpdateUnitClerk]"], [
        unitClerk
    ]);
    // Save all pending changes at once
    const handleSaveLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PatientGrid.useCallback[handleSaveLayout]": async ()=>{
            try {
                // Prepare batch updates
                const patientUpdates = Object.entries(pendingChanges.patients).map({
                    "PatientGrid.useCallback[handleSaveLayout].patientUpdates": ([id, data])=>({
                            id,
                            data
                        })
                }["PatientGrid.useCallback[handleSaveLayout].patientUpdates"]);
                // Apply all pending changes
                if (patientUpdates.length > 0) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["batchUpdatePatients"])(patientUpdates);
                }
                // Apply individual updates for nurses, PCTs, and staff
                await Promise.all([
                    ...Object.entries(pendingChanges.nurses).map({
                        "PatientGrid.useCallback[handleSaveLayout]": ([id, data])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateNurse"])(id, data)
                    }["PatientGrid.useCallback[handleSaveLayout]"]),
                    ...Object.entries(pendingChanges.pcts).map({
                        "PatientGrid.useCallback[handleSaveLayout]": ([id, data])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updatePCT"])(id, data)
                    }["PatientGrid.useCallback[handleSaveLayout]"]),
                    ...Object.entries(pendingChanges.staff).map({
                        "PatientGrid.useCallback[handleSaveLayout]": ([id, data])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$optimized$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateStaffMember"])(id, data)
                    }["PatientGrid.useCallback[handleSaveLayout]"])
                ]);
                // Clear all pending changes
                setPendingChanges({
                    patients: {},
                    nurses: {},
                    pcts: {},
                    staff: {}
                });
                setEditMode(false);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Layout Saved',
                    description: 'Unit layout has been saved successfully'
                });
            } catch (error) {
                console.error('Error saving layout:', error);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: 'Error',
                    description: 'Failed to save some changes. Please try again.',
                    variant: 'destructive'
                });
            }
        }
    }["PatientGrid.useCallback[handleSaveLayout]"], [
        pendingChanges
    ]);
    // Check if there are any pending changes
    const hasPendingChanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PatientGrid.useMemo[hasPendingChanges]": ()=>{
            return Object.keys(pendingChanges.patients).length > 0 || Object.keys(pendingChanges.nurses).length > 0 || Object.keys(pendingChanges.pcts).length > 0 || Object.keys(pendingChanges.staff).length > 0;
        }
    }["PatientGrid.useMemo[hasPendingChanges]"], [
        pendingChanges
    ]);
    if (loading || initializing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border p-4 flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 471,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: initializing ? 'Initializing unit data...' : 'Loading...'
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/patient-grid.tsx",
                lineNumber: 470,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/patient-grid.tsx",
            lineNumber: 469,
            columnNumber: 7
        }, this);
    }
    if (!unit) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg border p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-500",
                children: "Unit not found"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/patient-grid.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/shared/patient-grid.tsx",
            lineNumber: 480,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold",
                        children: [
                            unit.designation,
                            " Patient Grid"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            hasPendingChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-amber-600 text-sm flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-2 h-2 bg-amber-600 rounded-full mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this),
                                    "Unsaved changes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/patient-grid.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: editMode ? "default" : "outline",
                                onClick: ()=>editMode ? handleSaveLayout() : setEditMode(true),
                                children: editMode ? "Save Layout" : "Edit Layout"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/patient-grid.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/patient-grid.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-medium mb-3",
                                children: "Unassigned Patients"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/patient-grid.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    unassignedPatients.map((patient)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center p-2 border rounded bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                "Room ",
                                                                patient.roomNumber
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/shared/patient-grid.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 19
                                                        }, this),
                                                        patient.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-sm",
                                                            children: patient.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/shared/patient-grid.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 36
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shared/patient-grid.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 rounded-full text-xs ${patient.acuity >= 4 ? 'bg-red-100 text-red-800' : patient.acuity >= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`,
                                                    children: [
                                                        "Acuity ",
                                                        patient.acuity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/shared/patient-grid.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, patient.id, true, {
                                            fileName: "[project]/src/components/shared/patient-grid.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this)),
                                    unassignedPatients.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 italic",
                                        children: "All patients assigned"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/patient-grid.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    nurses.map((nurse)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$nurse$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NurseCard"], {
                            nurse: nurse,
                            patients: patients,
                            onAssign: (patientId)=>handleAssignPatient(nurse.id, patientId),
                            onUnassign: (roomNumber)=>handleUnassignPatient(nurse.id, roomNumber),
                            onUpdate: (data)=>handleUpdateNurse(nurse.id, data),
                            editMode: editMode
                        }, nurse.id, false, {
                            fileName: "[project]/src/components/shared/patient-grid.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this)),
                    pcts.map((pct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$pct$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCTCard"], {
                            pct: pct,
                            onUpdate: (data)=>handleUpdatePCT(pct.id, data),
                            editMode: editMode
                        }, pct.id, false, {
                            fileName: "[project]/src/components/shared/patient-grid.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this)),
                    chargeNurse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$staff$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaffCard"], {
                        title: "Charge Nurse",
                        staffMember: chargeNurse,
                        onUpdate: handleUpdateChargeNurse,
                        editMode: editMode,
                        size: "small"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 557,
                        columnNumber: 11
                    }, this),
                    unitClerk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$staff$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaffCard"], {
                        title: "Unit Clerk",
                        staffMember: unitClerk,
                        onUpdate: handleUpdateUnitClerk,
                        editMode: editMode,
                        size: "small"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/patient-grid.tsx",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/patient-grid.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/patient-grid.tsx",
        lineNumber: 487,
        columnNumber: 5
    }, this);
}
_s(PatientGrid, "Gm9a0SCQUFV6/1lOZ+PHzWzTQYA=");
_c = PatientGrid;
var _c;
__turbopack_context__.k.register(_c, "PatientGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/facility/unit-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnitCard": (()=>UnitCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function UnitCard({ unit, isSelected, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border rounded-lg p-4 cursor-pointer transition-all ${isSelected ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}`,
        onClick: onSelect,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-medium text-lg",
                children: unit.designation
            }, void 0, false, {
                fileName: "[project]/src/components/facility/unit-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-1 text-sm text-gray-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Rooms: ",
                            unit.roomCount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/facility/unit-card.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Room Range: ",
                            unit.roomRanges.join(', ')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/facility/unit-card.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full",
                                children: [
                                    unit.nurseCardCount,
                                    " Nurse Cards"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/facility/unit-card.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
                                children: [
                                    unit.pctCardCount,
                                    " PCT Cards"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/facility/unit-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            unit.hasChargeNurse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full",
                                children: "Charge Nurse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/facility/unit-card.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            unit.hasUnitClerk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full",
                                children: "Unit Clerk"
                            }, void 0, false, {
                                fileName: "[project]/src/components/facility/unit-card.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/facility/unit-card.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/facility/unit-card.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 text-blue-600 text-sm font-medium",
                children: "Currently Selected"
            }, void 0, false, {
                fileName: "[project]/src/components/facility/unit-card.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            unit.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-xs text-gray-400",
                children: [
                    "Created: ",
                    new Date(unit.createdAt).toLocaleDateString()
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/facility/unit-card.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/facility/unit-card.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = UnitCard;
var _c;
__turbopack_context__.k.register(_c, "UnitCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "batchCreateNurses": (()=>batchCreateNurses),
    "batchCreatePCTs": (()=>batchCreatePCTs),
    "batchCreatePatients": (()=>batchCreatePatients),
    "batchCreateStaffMembers": (()=>batchCreateStaffMembers),
    "batchUpdatePatients": (()=>batchUpdatePatients),
    "createFacility": (()=>createFacility),
    "createNurse": (()=>createNurse),
    "createPCT": (()=>createPCT),
    "createPatient": (()=>createPatient),
    "createStaffMember": (()=>createStaffMember),
    "createUnit": (()=>createUnit),
    "deleteNurse": (()=>deleteNurse),
    "deletePCT": (()=>deletePCT),
    "deletePatient": (()=>deletePatient),
    "deleteStaffMember": (()=>deleteStaffMember),
    "deleteUnit": (()=>deleteUnit),
    "deleteUnitNurses": (()=>deleteUnitNurses),
    "deleteUnitPCTs": (()=>deleteUnitPCTs),
    "deleteUnitPatients": (()=>deleteUnitPatients),
    "deleteUnitStaff": (()=>deleteUnitStaff),
    "getFacilities": (()=>getFacilities),
    "getModules": (()=>getModules),
    "getNursesByUnit": (()=>getNursesByUnit),
    "getPCTsByUnit": (()=>getPCTsByUnit),
    "getPatientsByUnit": (()=>getPatientsByUnit),
    "getStaffByUnit": (()=>getStaffByUnit),
    "getStaffByUnitAndRole": (()=>getStaffByUnitAndRole),
    "getUnit": (()=>getUnit),
    "getUnits": (()=>getUnits),
    "initializeModules": (()=>initializeModules),
    "initializeUnitData": (()=>initializeUnitData),
    "loadUnitData": (()=>loadUnitData),
    "setupDefaultModules": (()=>setupDefaultModules),
    "updateModule": (()=>updateModule),
    "updateNurse": (()=>updateNurse),
    "updatePCT": (()=>updatePCT),
    "updatePatient": (()=>updatePatient),
    "updateStaffMember": (()=>updateStaffMember),
    "updateUnit": (()=>updateUnit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
// Firebase Collection References
const facilitiesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'facilities');
const unitsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'units');
const patientsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'patients');
const nursesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'nurses');
const pctsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'pcts');
const staffCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'staff');
const modulesCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'modules');
// Cache
let facilitiesCache = null;
let unitsCache = new Map();
let unitDataCache = new Map();
async function createFacility(facilityData) {
    const timestamp = Date.now();
    const facilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(facilitiesCollection);
    const newFacility = {
        ...facilityData,
        id: facilityRef.id,
        createdAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(facilityRef, newFacility);
    if (facilitiesCache) {
        facilitiesCache.push(newFacility);
    }
    return newFacility;
}
async function getFacilities() {
    if (facilitiesCache) {
        return facilitiesCache;
    }
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(facilitiesCollection);
    const facilities = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data()
        }));
    facilitiesCache = facilities;
    return facilities;
}
async function createUnit(unitData) {
    const timestamp = Date.now();
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection);
    const newUnit = {
        ...unitData,
        id: unitRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(unitRef, newUnit);
    // Update cache
    const facilityUnits = unitsCache.get(newUnit.facilityId) || [];
    unitsCache.set(newUnit.facilityId, [
        ...facilityUnits,
        newUnit
    ]);
    return newUnit;
}
async function getUnits(facilityId) {
    if (!facilityId) return [];
    // Return from cache if available
    if (unitsCache.has(facilityId)) {
        return unitsCache.get(facilityId);
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(unitsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('facilityId', '==', facilityId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const units = snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    unitsCache.set(facilityId, units);
    return units;
}
async function getUnit(unitId) {
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.unit) {
        return cachedData.unit;
    }
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    const unitSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(unitRef);
    if (unitSnap.exists()) {
        return {
            id: unitSnap.id,
            ...unitSnap.data()
        };
    }
    return null;
}
async function updateUnit(unitId, data) {
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(unitRef, updateData);
    // Update cache
    unitsCache.forEach((units, facilityId)=>{
        const index = units.findIndex((u)=>u.id === unitId);
        if (index !== -1) {
            const updatedUnits = [
                ...units
            ];
            updatedUnits[index] = {
                ...updatedUnits[index],
                ...updateData
            };
            unitsCache.set(facilityId, updatedUnits);
        }
    });
    if (unitDataCache.has(unitId) && unitDataCache.get(unitId).unit) {
        unitDataCache.get(unitId).unit = {
            ...unitDataCache.get(unitId).unit,
            ...updateData
        };
    }
}
async function deleteUnit(unitId, facilityId) {
    const unitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(unitsCollection, unitId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(unitRef);
    // Delete related data
    await deleteUnitPatients(unitId);
    await deleteUnitNurses(unitId);
    await deleteUnitPCTs(unitId);
    await deleteUnitStaff(unitId);
    // Update cache
    const facilityUnits = unitsCache.get(facilityId) || [];
    unitsCache.set(facilityId, facilityUnits.filter((u)=>u.id !== unitId));
    unitDataCache.delete(unitId);
}
async function createPatient(patientData) {
    const timestamp = Date.now();
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection);
    const newPatient = {
        ...patientData,
        id: patientRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(patientRef, newPatient);
    // Update cache
    if (unitDataCache.has(patientData.unitId)) {
        unitDataCache.get(patientData.unitId).patients.push(newPatient);
    }
    return newPatient;
}
async function batchCreatePatients(patientsData) {
    if (patientsData.length === 0) {
        return [];
    }
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newPatients = [];
    for (const patientData of patientsData){
        const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection);
        const newPatient = {
            ...patientData,
            id: patientRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(patientRef, newPatient);
        newPatients.push(newPatient);
    }
    await batch.commit();
    return newPatients;
}
async function getPatientsByUnit(unitId) {
    if (!unitId) return [];
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.patients.length > 0) {
        return cachedData.patients;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const patients = snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).patients = patients;
    } else {
        unitDataCache.set(unitId, {
            unit: null,
            patients,
            nurses: [],
            pcts: [],
            chargeNurse: null,
            unitClerk: null
        });
    }
    return patients;
}
async function updatePatient(patientId, data) {
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, patientId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(patientRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.patients.findIndex((p)=>p.id === patientId);
        if (index !== -1) {
            cachedData.patients[index] = {
                ...cachedData.patients[index],
                ...updateData
            };
            break;
        }
    }
}
async function batchUpdatePatients(updates) {
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const timestamp = Date.now();
    for (const { id, data } of updates){
        const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, id);
        batch.update(patientRef, {
            ...data,
            updatedAt: timestamp
        });
        // Update cache
        for (const [unitId, cachedData] of unitDataCache.entries()){
            const index = cachedData.patients.findIndex((p)=>p.id === id);
            if (index !== -1) {
                cachedData.patients[index] = {
                    ...cachedData.patients[index],
                    ...data,
                    updatedAt: timestamp
                };
                break;
            }
        }
    }
    await batch.commit();
}
async function deletePatient(patientId) {
    const patientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(patientsCollection, patientId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(patientRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.patients = cachedData.patients.filter((p)=>p.id !== patientId);
    }
}
async function deleteUnitPatients(unitId) {
    if (!unitId) return;
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(patientsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return;
    }
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
}
async function createNurse(nurseData) {
    const timestamp = Date.now();
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection);
    const newNurse = {
        ...nurseData,
        id: nurseRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(nurseRef, newNurse);
    // Update cache
    if (unitDataCache.has(nurseData.unitId)) {
        unitDataCache.get(nurseData.unitId).nurses.push(newNurse);
    }
    return newNurse;
}
async function batchCreateNurses(nursesData) {
    if (nursesData.length === 0) {
        return [];
    }
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newNurses = [];
    for (const nurseData of nursesData){
        const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection);
        const newNurse = {
            ...nurseData,
            id: nurseRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(nurseRef, newNurse);
        newNurses.push(newNurse);
    }
    await batch.commit();
    return newNurses;
}
async function getNursesByUnit(unitId) {
    if (!unitId) return [];
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.nurses.length > 0) {
        return cachedData.nurses;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(nursesCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const nurses = snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).nurses = nurses;
    } else {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses,
            pcts: [],
            chargeNurse: null,
            unitClerk: null
        });
    }
    return nurses;
}
async function updateNurse(nurseId, data) {
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection, nurseId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(nurseRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.nurses.findIndex((n)=>n.id === nurseId);
        if (index !== -1) {
            cachedData.nurses[index] = {
                ...cachedData.nurses[index],
                ...updateData
            };
            break;
        }
    }
}
async function deleteNurse(nurseId) {
    const nurseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(nursesCollection, nurseId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(nurseRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.nurses = cachedData.nurses.filter((n)=>n.id !== nurseId);
    }
}
async function deleteUnitNurses(unitId) {
    if (!unitId) return;
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(nursesCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return;
    }
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
}
async function createPCT(pctData) {
    const timestamp = Date.now();
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection);
    const newPCT = {
        ...pctData,
        id: pctRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(pctRef, newPCT);
    // Update cache
    if (unitDataCache.has(pctData.unitId)) {
        unitDataCache.get(pctData.unitId).pcts.push(newPCT);
    }
    return newPCT;
}
async function batchCreatePCTs(pctsData) {
    if (pctsData.length === 0) {
        return [];
    }
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newPCTs = [];
    for (const pctData of pctsData){
        const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection);
        const newPCT = {
            ...pctData,
            id: pctRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(pctRef, newPCT);
        newPCTs.push(newPCT);
    }
    await batch.commit();
    return newPCTs;
}
async function getPCTsByUnit(unitId) {
    if (!unitId) return [];
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (cachedData?.pcts.length > 0) {
        return cachedData.pcts;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(pctsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const pcts = snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
    if (unitDataCache.has(unitId)) {
        unitDataCache.get(unitId).pcts = pcts;
    } else {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses: [],
            pcts,
            chargeNurse: null,
            unitClerk: null
        });
    }
    return pcts;
}
async function updatePCT(pctId, data) {
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection, pctId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(pctRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        const index = cachedData.pcts.findIndex((p)=>p.id === pctId);
        if (index !== -1) {
            cachedData.pcts[index] = {
                ...cachedData.pcts[index],
                ...updateData
            };
            break;
        }
    }
}
async function deletePCT(pctId) {
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(pctsCollection, pctId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(pctRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        cachedData.pcts = cachedData.pcts.filter((p)=>p.id !== pctId);
    }
}
async function deleteUnitPCTs(unitId) {
    if (!unitId) return;
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(pctsCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return;
    }
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
}
async function createStaffMember(staffData) {
    const timestamp = Date.now();
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection);
    const newStaff = {
        ...staffData,
        id: staffRef.id,
        createdAt: timestamp,
        updatedAt: timestamp
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(staffRef, newStaff);
    // Update cache
    if (unitDataCache.has(staffData.unitId)) {
        if (staffData.role === 'chargeNurse') {
            unitDataCache.get(staffData.unitId).chargeNurse = newStaff;
        } else if (staffData.role === 'unitClerk') {
            unitDataCache.get(staffData.unitId).unitClerk = newStaff;
        }
    }
    return newStaff;
}
async function batchCreateStaffMembers(staffData) {
    if (staffData.length === 0) {
        return [];
    }
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    const newStaffMembers = [];
    for (const staffMemberData of staffData){
        const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection);
        const newStaff = {
            ...staffMemberData,
            id: staffRef.id,
            createdAt: timestamp,
            updatedAt: timestamp
        };
        batch.set(staffRef, newStaff);
        newStaffMembers.push(newStaff);
    }
    await batch.commit();
    return newStaffMembers;
}
async function getStaffByUnit(unitId) {
    if (!unitId) return [];
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    return snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
}
async function getStaffByUnitAndRole(unitId, role) {
    if (!unitId) return null;
    // Check cache first
    const cachedData = unitDataCache.get(unitId);
    if (role === 'chargeNurse' && cachedData?.chargeNurse) {
        return cachedData.chargeNurse;
    } else if (role === 'unitClerk' && cachedData?.unitClerk) {
        return cachedData.unitClerk;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('role', '==', role));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return null;
    }
    const staffData = snapshot.docs[0].data();
    const staffMember = {
        id: snapshot.docs[0].id,
        ...staffData
    };
    if (unitDataCache.has(unitId)) {
        if (role === 'chargeNurse') {
            unitDataCache.get(unitId).chargeNurse = staffMember;
        } else if (role === 'unitClerk') {
            unitDataCache.get(unitId).unitClerk = staffMember;
        }
    } else {
        unitDataCache.set(unitId, {
            unit: null,
            patients: [],
            nurses: [],
            pcts: [],
            chargeNurse: role === 'chargeNurse' ? staffMember : null,
            unitClerk: role === 'unitClerk' ? staffMember : null
        });
    }
    return staffMember;
}
async function updateStaffMember(staffId, data) {
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection, staffId);
    const updateData = {
        ...data,
        updatedAt: Date.now()
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(staffRef, updateData);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        if (cachedData.chargeNurse?.id === staffId) {
            cachedData.chargeNurse = {
                ...cachedData.chargeNurse,
                ...updateData
            };
        } else if (cachedData.unitClerk?.id === staffId) {
            cachedData.unitClerk = {
                ...cachedData.unitClerk,
                ...updateData
            };
        }
    }
}
async function deleteStaffMember(staffId) {
    const staffRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(staffCollection, staffId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(staffRef);
    // Update cache
    for (const [unitId, cachedData] of unitDataCache.entries()){
        if (cachedData.chargeNurse?.id === staffId) {
            cachedData.chargeNurse = null;
        } else if (cachedData.unitClerk?.id === staffId) {
            cachedData.unitClerk = null;
        }
    }
}
async function deleteUnitStaff(unitId) {
    if (!unitId) return;
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(staffCollection, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('unitId', '==', unitId));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return;
    }
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    snapshot.docs.forEach((doc)=>{
        batch.delete(doc.ref);
    });
    await batch.commit();
}
async function getModules() {
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(modulesCollection);
    return snapshot.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data()
        };
    });
}
async function updateModule(moduleId, enabled) {
    const moduleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(modulesCollection, moduleId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(moduleRef, {
        enabled,
        updatedAt: Date.now()
    });
}
async function initializeModules(modules) {
    const timestamp = Date.now();
    const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
    for (const module of modules){
        const moduleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(modulesCollection, module.id);
        const moduleSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(moduleRef);
        if (!moduleSnap.exists()) {
            batch.set(moduleRef, {
                ...module,
                updatedAt: timestamp
            });
        }
    }
    await batch.commit();
}
async function setupDefaultModules() {
    const defaultModules = [
        {
            id: 'mock-patient',
            name: 'Mock Patient Data',
            description: 'Generate mock patient data for testing',
            enabled: true
        },
        {
            id: 'spectra-pool',
            name: 'Spectra Pool Management',
            description: 'Manage spectra pool assignments',
            enabled: false
        },
        {
            id: 'acuity-tracking',
            name: 'Acuity Tracking',
            description: 'Track and manage patient acuity levels',
            enabled: true
        },
        {
            id: 'bed-management',
            name: 'Bed Management',
            description: 'Track bed availability and assignments',
            enabled: true
        },
        {
            id: 'staff-messaging',
            name: 'Staff Messaging',
            description: 'Internal messaging system for staff',
            enabled: false
        }
    ];
    await initializeModules(defaultModules);
}
async function loadUnitData(unitId) {
    if (!unitId) return {
        unit: null,
        patients: [],
        nurses: [],
        pcts: [],
        chargeNurse: null,
        unitClerk: null
    };
    // Check cache first
    if (unitDataCache.has(unitId)) {
        const cached = unitDataCache.get(unitId);
        // A simple check to see if the cache is populated
        if (cached.unit) return cached;
    }
    // Load all data in parallel
    const [unit, patients, nurses, pcts, chargeNurse, unitClerk] = await Promise.all([
        getUnit(unitId),
        getPatientsByUnit(unitId),
        getNursesByUnit(unitId),
        getPCTsByUnit(unitId),
        getStaffByUnitAndRole(unitId, 'chargeNurse'),
        getStaffByUnitAndRole(unitId, 'unitClerk')
    ]);
    const data = {
        unit,
        patients,
        nurses,
        pcts,
        chargeNurse,
        unitClerk
    };
    unitDataCache.set(unitId, data);
    return data;
}
async function initializeUnitData(unit) {
    // Generate all the data first
    const patientsData = [];
    const nursesData = [];
    const pctsData = [];
    const staffData = [];
    // Generate patient data
    for (const range of unit.roomRanges){
        const [start, end] = range.split('-').map((num)=>parseInt(num, 10));
        for(let roomNum = start; roomNum <= end; roomNum++){
            patientsData.push({
                unitId: unit.id,
                roomNumber: roomNum.toString(),
                name: '',
                acuity: Math.floor(Math.random() * 5) + 1,
                assigned: false
            });
        }
    }
    // Generate nurse data
    for(let i = 0; i < unit.nurseCardCount; i++){
        nursesData.push({
            unitId: unit.id,
            name: `Nurse ${i + 1}`,
            spectraNumber: `SN${10000 + i}`,
            reliefName: '',
            assignedRooms: [],
            acuityCapacity: 12
        });
    }
    // Generate PCT data
    for(let i = 0; i < unit.pctCardCount; i++){
        // Divide room ranges among PCTs
        const rangeIndex = i % unit.roomRanges.length;
        const [start, end] = unit.roomRanges[rangeIndex].split('-').map((num)=>parseInt(num, 10));
        const rangeSize = end - start + 1;
        const pctRangeSize = Math.ceil(rangeSize / unit.pctCardCount);
        const pctStart = start + i * pctRangeSize;
        const pctEnd = Math.min(pctStart + pctRangeSize - 1, end);
        pctsData.push({
            unitId: unit.id,
            name: `PCT ${i + 1}`,
            spectraNumber: `PCT${10000 + i}`,
            reliefName: '',
            roomRange: `${pctStart}-${pctEnd}`
        });
    }
    // Generate staff data
    if (unit.hasChargeNurse) {
        staffData.push({
            unitId: unit.id,
            name: '',
            spectraNumber: '',
            role: 'chargeNurse'
        });
    }
    if (unit.hasUnitClerk) {
        staffData.push({
            unitId: unit.id,
            name: '',
            spectraNumber: '',
            role: 'unitClerk'
        });
    }
    const [patients, nurses, pcts, staffMembers] = await Promise.all([
        batchCreatePatients(patientsData),
        batchCreateNurses(nursesData),
        batchCreatePCTs(pctsData),
        batchCreateStaffMembers(staffData)
    ]);
    // Process staff members
    let chargeNurse = null;
    let unitClerk = null;
    for (const staff of staffMembers){
        if (staff.role === 'chargeNurse') {
            chargeNurse = staff;
        } else if (staff.role === 'unitClerk') {
            unitClerk = staff;
        }
    }
    return {
        patients,
        nurses,
        pcts,
        chargeNurse,
        unitClerk
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/firebase.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-gray-200", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/auth/login-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LoginDialog": (()=>LoginDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/label'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function LoginDialog({ open, onOpenChange, onLogin }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('admin@unitview.com');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('password');
    const [isLoggingIn, setIsLoggingIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleLoginAttempt = async ()=>{
        setIsLoggingIn(true);
        setError('');
        const success = await onLogin({
            email,
            password
        });
        setIsLoggingIn(false);
        if (!success) {
            setError('Invalid credentials. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Authorization Required"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Please log in to access this facility's information."
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    htmlFor: "email",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    id: "email",
                                    type: "email",
                                    placeholder: "admin@unitview.com",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                    htmlFor: "password",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                    id: "password",
                                    type: "password",
                                    placeholder: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: "For demo purposes, use email: admin@unitview.com and password: password"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 71,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: ()=>onOpenChange(false),
                            disabled: isLoggingIn,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            onClick: handleLoginAttempt,
                            disabled: isLoggingIn,
                            children: isLoggingIn ? 'Logging In...' : 'Login'
                        }, void 0, false, {
                            fileName: "[project]/src/components/auth/login-dialog.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/auth/login-dialog.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/auth/login-dialog.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/auth/login-dialog.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(LoginDialog, "19y1lDxOZqRlvd4IU/4wPmYKbY0=");
_c = LoginDialog;
var _c;
__turbopack_context__.k.register(_c, "LoginDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/facility-setup/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FacilitySetupPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$create$2d$unit$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/facility/create-unit-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$module$2d$toggle$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/facility/module-toggle-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$patient$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/patient-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$unit$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/facility/unit-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hospital.js [app-client] (ecmascript) <export default as Hospital>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth/login-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index-9ccb475d.js [app-client] (ecmascript) <export ac as signInWithEmailAndPassword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function FacilitySetupPage() {
    _s();
    const [facilities, setFacilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFacility, setSelectedFacility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [units, setUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modules, setModules] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCreateUnitOpen, setIsCreateUnitOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUnit, setSelectedUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [facilityToAuth, setFacilityToAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreatingFacility, setIsCreatingFacility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newFacilityName, setNewFacilityName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Load initial data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacilitySetupPage.useEffect": ()=>{
            const loadInitialData = {
                "FacilitySetupPage.useEffect.loadInitialData": async ()=>{
                    try {
                        setLoading(true);
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setupDefaultModules"])();
                        const [facilitiesData, modulesData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getFacilities"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getModules"])()
                        ]);
                        setFacilities(facilitiesData);
                        setModules(modulesData);
                    } catch (error) {
                        console.error('Error loading initial data:', error);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                            title: 'Error',
                            description: 'Failed to load initial data. Please try again.',
                            variant: 'destructive'
                        });
                    } finally{
                        setLoading(false);
                    }
                }
            }["FacilitySetupPage.useEffect.loadInitialData"];
            loadInitialData();
        }
    }["FacilitySetupPage.useEffect"], []);
    // Load units when a facility is selected and authenticated
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacilitySetupPage.useEffect": ()=>{
            if (selectedFacility && isAuthenticated) {
                const loadUnits = {
                    "FacilitySetupPage.useEffect.loadUnits": async ()=>{
                        try {
                            setLoading(true);
                            const unitData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUnits"])(selectedFacility.id);
                            setUnits(unitData);
                            if (unitData.length > 0) {
                                setSelectedUnit(unitData[0]);
                            } else {
                                setSelectedUnit(null);
                            }
                        } catch (error) {
                            console.error('Error loading units:', error);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                                title: 'Error',
                                description: `Failed to load units for ${selectedFacility.name}.`,
                                variant: 'destructive'
                            });
                        } finally{
                            setLoading(false);
                        }
                    }
                }["FacilitySetupPage.useEffect.loadUnits"];
                loadUnits();
            }
        }
    }["FacilitySetupPage.useEffect"], [
        selectedFacility,
        isAuthenticated
    ]);
    const handleFacilitySelect = (facility)=>{
        if (selectedFacility?.id === facility.id && isAuthenticated) {
            // If the same facility is clicked and we are authenticated, do nothing
            return;
        }
        setFacilityToAuth(facility);
        setIsLoginOpen(true);
    };
    const handleLogin = async (data)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$9ccb475d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ac__as__signInWithEmailAndPassword$3e$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], data.email, data.password);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Login Successful",
                description: `Welcome to ${facilityToAuth?.name}`
            });
            setSelectedFacility(facilityToAuth);
            setIsAuthenticated(true);
            setIsLoginOpen(false);
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Login Failed",
                description: "Invalid credentials. Please try again.",
                variant: 'destructive'
            });
            return false;
        }
    };
    const handleCreateFacility = async ()=>{
        if (!newFacilityName.trim()) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Facility name cannot be empty',
                variant: 'destructive'
            });
            return;
        }
        try {
            const newFacility = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createFacility"])({
                name: newFacilityName
            });
            setFacilities((prev)=>[
                    ...prev,
                    newFacility
                ]);
            setNewFacilityName('');
            setIsCreatingFacility(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Success',
                description: `Facility "${newFacility.name}" created.`
            });
        } catch (error) {
            console.error("Failed to create facility", error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "Could not create facility",
                variant: 'destructive'
            });
        }
    };
    const handleCreateUnit = async (unitData)=>{
        if (!selectedFacility) return;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Creating Unit',
                description: 'Please wait...'
            });
            const newUnit = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUnit"])({
                ...unitData,
                facilityId: selectedFacility.id
            });
            setUnits((prevUnits)=>[
                    ...prevUnits,
                    newUnit
                ]);
            setSelectedUnit(newUnit);
            setIsCreateUnitOpen(false);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Success',
                description: `Unit "${newUnit.designation}" has been created.`
            });
        } catch (error) {
            console.error('Error creating unit:', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to create unit.',
                variant: 'destructive'
            });
        }
    };
    const handleModuleToggle = async (moduleId)=>{
        try {
            const moduleToUpdate = modules.find((m)=>m.id === moduleId);
            if (!moduleToUpdate) return;
            const newEnabledState = !moduleToUpdate.enabled;
            setModules(modules.map((module)=>module.id === moduleId ? {
                    ...module,
                    enabled: newEnabledState
                } : module));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateModule"])(moduleId, newEnabledState);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Module Updated',
                description: `${moduleToUpdate.name} has been ${newEnabledState ? 'enabled' : 'disabled'}.`
            });
        } catch (error) {
            console.error('Error toggling module:', error);
            setModules(modules); // Revert optimistic update
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: 'Error',
                description: 'Failed to update module.',
                variant: 'destructive'
            });
        }
    };
    if (loading && facilities.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-10 w-48 mb-8"
                }, void 0, false, {
                    fileName: "[project]/src/app/facility-setup/page.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32 w-full"
                        }, i, false, {
                            fileName: "[project]/src/app/facility-setup/page.tsx",
                            lineNumber: 176,
                            columnNumber: 31
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/facility-setup/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/facility-setup/page.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this);
    }
    if (!isAuthenticated || !selectedFacility) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6",
                    children: "Select a Facility"
                }, void 0, false, {
                    fileName: "[project]/src/app/facility-setup/page.tsx",
                    lineNumber: 185,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [
                        facilities.map((facility)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleFacilitySelect(facility),
                                className: "border rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 hover:shadow-md transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hospital$3e$__["Hospital"], {
                                        className: "w-12 h-12 mb-4 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold",
                                        children: facility.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, facility.id, true, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 188,
                                columnNumber: 14
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center",
                            children: isCreatingFacility ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newFacilityName,
                                        onChange: (e)=>setNewFacilityName(e.target.value),
                                        placeholder: "New Facility Name",
                                        className: "w-full p-2 border rounded mb-2",
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleCreateFacility,
                                                size: "sm",
                                                children: "Create"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "sm",
                                                onClick: ()=>setIsCreatingFacility(false),
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 196,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCreatingFacility(true),
                                className: "w-full h-full flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                        className: "w-12 h-12 mb-4 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-600",
                                        children: "Add Facility"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 211,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/facility-setup/page.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facility-setup/page.tsx",
                    lineNumber: 186,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginDialog"], {
                    open: isLoginOpen,
                    onOpenChange: setIsLoginOpen,
                    onLogin: handleLogin
                }, void 0, false, {
                    fileName: "[project]/src/app/facility-setup/page.tsx",
                    lineNumber: 218,
                    columnNumber: 10
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/facility-setup/page.tsx",
            lineNumber: 184,
            columnNumber: 8
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold",
                                children: [
                                    "Facility Setup: ",
                                    selectedFacility.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "link",
                                className: "p-0 h-auto",
                                onClick: ()=>{
                                    setIsAuthenticated(false);
                                    setSelectedFacility(null);
                                },
                                children: "Switch Facility"
                            }, void 0, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setIsCreateUnitOpen(true),
                        children: "Create New Unit"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facility-setup/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Units"
                            }, void 0, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            units.length > 0 ? units.map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$unit$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnitCard"], {
                                    unit: unit,
                                    isSelected: selectedUnit?.id === unit.id,
                                    onSelect: ()=>setSelectedUnit(unit)
                                }, unit.id, false, {
                                    fileName: "[project]/src/app/facility-setup/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 border rounded-lg p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 mb-4",
                                        children: "No units created for this facility."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>setIsCreateUnitOpen(true),
                                        children: "Create First Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/facility-setup/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: selectedUnit ? `${selectedUnit.designation} Layout` : 'Select or Create a Unit'
                            }, void 0, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            selectedUnit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$patient$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PatientGrid"], {
                                unitId: selectedUnit.id
                            }, void 0, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 border rounded-lg p-12 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500",
                                    children: "Select a unit or create one to see the layout."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facility-setup/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facility-setup/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold mb-6",
                        children: "Module Configuration"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    modules.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: modules.map((module)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$module$2d$toggle$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleToggleCard"], {
                                module: module,
                                onToggle: ()=>handleModuleToggle(module.id)
                            }, module.id, false, {
                                fileName: "[project]/src/app/facility-setup/page.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 border rounded-lg p-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No modules available."
                        }, void 0, false, {
                            fileName: "[project]/src/app/facility-setup/page.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/facility-setup/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facility-setup/page.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$facility$2f$create$2d$unit$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateUnitDialog"], {
                open: isCreateUnitOpen,
                onClose: ()=>setIsCreateUnitOpen(false),
                onCreateUnit: handleCreateUnit
            }, void 0, false, {
                fileName: "[project]/src/app/facility-setup/page.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2f$login$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginDialog"], {
                open: isLoginOpen,
                onOpenChange: setIsLoginOpen,
                onLogin: handleLogin
            }, void 0, false, {
                fileName: "[project]/src/app/facility-setup/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/facility-setup/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s(FacilitySetupPage, "OEBegGfat6wAE/+Vl3KcQYks8H4=");
_c = FacilitySetupPage;
var _c;
__turbopack_context__.k.register(_c, "FacilitySetupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_b71198e0._.js.map