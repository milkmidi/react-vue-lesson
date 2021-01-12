interface Prism {
  highlightElement(element:HTMLElement)
}

interface Window {
  Prism: Prism;
}
