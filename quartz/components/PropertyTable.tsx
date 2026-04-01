import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"
import { classNames } from "../util/lang"

interface Options {
  title: string
  tag: string
  columns: string[]
}

const defaultOptions: Options = {
  title: "Latest Shots",
  tag: "espresso",
  columns: ["fecha", "cafe", "score_general", "setting_molino", "gramos_in", "gramos_out"],
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  function PropertyTable({ allFiles, fileData, displayClass }: QuartzComponentProps) {
    const pages = allFiles
      .filter((page) => page.frontmatter?.tags?.includes(opts.tag))
      .sort((a, b) => {
        const dateA = a.frontmatter?.fecha || ""
        const dateB = b.frontmatter?.fecha || ""
        return dateB.toString().localeCompare(dateA.toString())
      })

    if (pages.length === 0) return null

    return (
      <div class={classNames(displayClass, "property-table")}>
        <h3>{opts.title}</h3>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                {opts.columns.map((col) => (
                  <th key={col}>{col.replace(/_/g, " ")}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.slug}>
                  {opts.columns.map((col) => {
                    let value = page.frontmatter?.[col]
                    if (col === "cafe") {
                        // Clean up Obsidian links [[Peru Gesha]] -> Peru Gesha
                        value = String(value).replace(/[\[\]]/g, "")
                    }
                    return (
                      <td key={col}>
                        {col === opts.columns[0] ? (
                          <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                            {String(value)}
                          </a>
                        ) : (
                          String(value ?? "")
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  PropertyTable.css = `
  .property-table {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .property-table .table-container {
    overflow-x: auto;
  }
  .property-table table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }
  .property-table th {
    text-align: left;
    padding: 0.75rem;
    background: var(--lightgray);
    color: var(--darkgray);
    text-transform: capitalize;
    border-bottom: 2px solid var(--gray);
  }
  .property-table td {
    padding: 0.75rem;
    border-bottom: 1px solid var(--lightgray);
    color: var(--dark);
  }
  .property-table tr:hover {
    background: var(--highlight);
  }
  `

  return PropertyTable
}) satisfies QuartzComponentConstructor
