import { test, expect } from '@playwright/test'

test.describe.serial('Project create and delete flow', () => {
	const projectName = `Test Project ${Math.random().toString(36).substring(2, 8)}`

	test('should create a project', async ({ page }) => {
		await page.goto('/dashboard/projects')
		await page.getByRole('button', { name: 'New Project' }).click()
		await page.getByRole('textbox', { name: 'Name' }).click()
		await page.getByRole('textbox', { name: 'Name' }).fill(projectName)
		await page.getByRole('textbox', { name: 'Description' }).click()
		await page
			.getByRole('textbox', { name: 'Description' })
			.fill(`This is the test description of ${projectName}`)
		await page.getByTestId('startDate').click()
		await page.getByRole('button', { name: 'Sunday, March 1st,' }).click()
		await page
			.getByRole('button', { name: 'Sunday, March 1st, 2026,' })
			.press('Escape')
		await page.getByTestId('deliveryDate').click()
		await page
			.getByRole('button', { name: 'Tuesday, March 31st,' })
			.nth(1)
			.click()
		await page
			.getByRole('button', { name: 'Tuesday, March 31st, 2026,' })
			.press('Escape')
		await page.getByRole('combobox', { name: 'Status' }).click()
		await page.getByRole('option', { name: 'On Track' }).click()
		await page.getByRole('button', { name: 'Submit' }).click()
		await page
			.getByTestId(`project-card-${projectName}`)
			.getByRole('link')
			.click()
		await expect(page.getByRole('heading', { name: projectName })).toBeVisible()
	})

	test('should delete a project', async ({ page }) => {
		await page.goto('/dashboard/projects')
		await page
			.getByTestId(`project-card-${projectName}`)
			.getByRole('link')
			.click()
		await page.getByRole('button', { name: 'Delete Project' }).click()
		await expect(page.getByTestId(`project-card-${projectName}`)).toBeHidden()
	})
})
