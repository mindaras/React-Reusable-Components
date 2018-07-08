export default ({ property = "all", length = "0.3s", easing = "ease" }) => `
    transition: ${property} ${length} ${easing};
`;
