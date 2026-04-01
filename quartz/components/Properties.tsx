import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Properties({ fileData, displayClass }: QuartzComponentProps) {
  const frontmatter = fileData.frontmatter
  if (!frontmatter) return null

  const ignoreProperties = [
    "title",
    "tags",
    "date",
    "description",
    "draft",
    "published",
    "lastmod",
    "modified",
    "created",
    "aliases",
    "cssclasses",
    "socialImage",
    "comments",
    "enableToc",
  ]

  const properties = Object.entries(frontmatter).filter(
    ([key]) => !ignoreProperties.includes(key),
  )

  if (properties.length === 0) return null

  return (
    <div class={classNames(displayClass, "properties")}>
      <table>
        <tbody>
          {properties.map(([key, value]) => (
            <tr key={key}>
              <th>{key.replace(/_/g, " ")}</th>
              <td>{typeof value === "object" ? JSON.stringify(value) : String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Properties.css = `
.properties {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.properties table {
  width: 100%;
  border-collapse: collapse;
}

.properties th {
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid var(--lightgray);
  color: var(--darkgray);
  width: 30%;
  text-transform: capitalize;
}

.properties td {
  padding: 0.5rem;
  border-bottom: 1px solid var(--lightgray);
  color: var(--dark);
}
`

export default (() => Properties) satisfies QuartzComponentConstructor
