const color= "\x1b[1;35m";
const underline= "\x1b[94;4m";
const normal= "\x1b[0m";
export const introMessage = [
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	"|                                                                             |",
	"| WebVM is a virtual Linux environment running in the browser via WebAssembly |",
	"|                                                                             |",
	"| WebVM is powered by the CheerpX virtualization engine, which enables safe,  |",
	"| sandboxed client-side execution of x86 binaries, fully client-side          |",
	"|                                                                             |",
	"| CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based  |",
	"| file system, and a Linux syscall emulator                                   |",
	"|                                                                             |",
	"| Try out the new Alpine / Xorg / i3 WebVM: " + underline + "https://webvm.io/alpine.html" + normal + "      |",
	"|                                                                             |",
	"| [News] Integrating Claude Computer Use in WebVM!                            |",
	"|                                                                             |",
	"| " + underline + "https://labs.leaningtech.com/blog/webvm-claude" + normal + "                              |",
	"|                                                                             |",
	"+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+",
	""
];
export const errorMessage = [
	color + "CheerpX could not start" + normal,
	"",
	"Check the DevTools console for more information",
	"",
	"CheerpX is expected to work with recent desktop versions of Chrome, Edge, Firefox and Safari",
	"",
	"Give it a try from a desktop version / another browser!",
	"",
	"CheerpX internal error message is:",
	""
];
export const unexpectedErrorMessage = [
	color + "WebVM encountered an unexpected error" + normal,
	"",
	"Check the DevTools console for further information",
	"",
	"Please consider reporting a bug!",
	"",
	"CheerpX internal error message is:",
	""
];
